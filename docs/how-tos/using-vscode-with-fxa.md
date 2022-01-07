---
title: Using VS Code with FxA
---

## Getting Started

To get familiar with VS Code it's recommended to read the [getting started][getting-started]
section of the VS Code docs so you're familiar with the UI terminology.

## Extensions

Opening the FxA repository will result in VS Code prompting you (in the lower right
of your VS Code Window) to install the project's "Recommended Extensions". These include
all the common extensions that will help in working with the FxA project's
packages.

## Multi-Root Workspaces

In VS code, you typically open up a folder and the `.vscode` directory inside
is used for the project's debugging/task configurations and settings. Since the
FxA repository is a mono-repo containing many individual packages, a single
global `.vscode` in the root directory is used for monorepo-wide settings and
to recommend extensions. However, there are `.vscode` directories within the
individual `packages/*` that add additional package specific debugging/task
configurations.

To utilize these you can open the desired package folder directly or use a
multi-root workspace. Using the multi-root workspace feature allows you to add
multiple package folders to your workspace which enables all of their individual
debugging/task configurations.

See the [VS Code docs][add-folder] for instructions on how to add a folder to your workspace.
Note that the first time you add a folder it will create a new Unnamed Workspace. You
can save the workspace as a file to easily resume the chosen open package folders
for future use as well.

## Using the VS Code Debugger

Once you have added a folder to your workspace, the additional debug/task settings
will be available in the [Debug View][debug-view]. If you don't see any after adding
a package folder with a `.vscode` directory, you may need to run 'Developer: Reload Window'
from the [command palette][command-palette].

The following videos show how to run test tasks and the FxA Auth Server with the debugger.

<iframe width="560" height="315" src="https://www.youtube.com/embed/g5b-3XSSqdU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/jyqrV3NcLfc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Collaborative Coding / Review

The recommended extensions for FxA install the [LiveShare Extension Pack][liveshare-ext-pack]
which includes the [LiveShare extension][introducing-liveshare]. Using this extension
you can share your editing and debugging environment including local terminals and the
debug session with invited developers.

VS Code has [documented common use-cases for Live Share][liveshare-use-cases] that provide
useful tips for setting up collaborative coding sessions. A good jumping off point to
learn more features available is the [LiveShare feature overview][liveshare-feature-overview].

### Collaborator Commits

When working collaboratively, the final commit should reflect all the collaborators that
worked on it. [GitHub properly displays commits written with the `Co-Authored-by`][github-coauthor]
line appended to the commit message.

## Remote Development via SSH

[Remote development][remote-dev] allows you to run the VS Code user interface on your
local machine while a core VS Code instance is run on a remote machine either via SSH,
WSL, docker Containers, or VS Online Azure instances. These instructions are tips for
setting up VS Code to work with a remote instance via SSH, and **should be run on the
remote instance**.

### SSH Tips/Tricks

Copy your local ssh public key to the remote machine on setup, this will create a user
with the username from your ssh keys email address.

#### Port Forwarding

It's useful to configure the forwards for FxA in your `~/.ssh/config` file so that
they're always active upon loading up VS Code. An example is shown below:

```bash title=~/.ssh/config
Host remotedev
  HostName yourServerIpAddress
  User yourUsername
  IdentityFile "C:\Users\yourUsername\.ssh\id_rsa_vs_code"
  LocalForward 1080 localhost:1080
  LocalForward 1111 localhost:1111
  LocalForward 1112 localhost:1112
  LocalForward 3030 localhost:3030
  LocalForward 3031 localhost:3031
  LocalForward 8080 localhost:8080
  LocalForward 9000 localhost:9000
  LocalForward 9010 localhost:9010
  LocalForward 9292 localhost:9292
  # vnc port
  LocalForward 5901 localhost:5901
```

### Increase File watch Limit

Add this line to the end of `/etc/sysctl.conf`

```bash title=/etc/sysctl.conf
fs.inotify.max_user_watches=524288
```

Reload sysctl settings:

```bash
sudo sysctl -p
```

### Git

Set your email/username:

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

Configure your favorite editor for commit messages (vim):

```bash
git config --global core.editor vim
```

### Using SSH/GPG Agent Forwarding

For security reasons it’s useful to avoid leaving SSH/GPG keys on remote development
instances.

#### VS Code

Enable agent forwarding option:

`User Settings -> Search for ‘agent’`, verify `Remote.SSH: Enable Agent Forwarding`
is checked.

#### SSH Config

Ensure you are running a local ssh-agent. You can see whether your agent is running
and has keys added to it by running `ssh-add -l` locally. If you do not see your keys,
run ssh-add and it will prompt to add your default keys or view the ssh-add docs to
add specific keys to your agent.

Additional instructions for ensuring your ssh-agent is running.

You will then need to add the appropriate setting to your `~/.ssh/config` file used
with VS Code. For the host in your config file, add `ForwardAgent yes`, as shown:

```bash title=~/.ssh/config
Host remotedev
HostName REMOTE_HOST
User REMOTE_USERNAME
ForwardAgent yes
```

Open a VS Code session to the remote host, and in the Terminal window run `ssh-add -l`
to verify the keys from the SSH agent are available. GPG Configuration Based on the
GnuPG Agent Forwarding documentation.

On your local machine get the location of the extra GPG socket:

```bash
gpgconf --list-dir agent-extra-socket
```

Install gnupg on remote server:

```bash
sudo apt-get install gnupg
```

On the remote machine, get the location of the GPG socket:

```bash
gpgconf --list-dir agent-socket
```

On the remote machine, edit the `/etc/ssh/sshd_config` file to add:

```bash title=/etc/ssh/sshd_config
StreamLocalBindUnlink yes
```

Restart the remote machine’s sshd service

Ensure that your bash account prompts you for the GPG passphrase correctly by editing
your `~/.bashrc` with:

```bash
GPG_TTY=\$(tty)
export GPG_TTY
```

Export your GPG public keys and import them on the remote machine.
Edit the local `~/.ssh/config` file used with VS Code to include the GPG agent socket:

```bash title=~/.ssh/config
Host remotedev
HostName REMOTE_HOST
User REMOTE_USERNAME
ForwardAgent yes
RemoteForward /run/user/1000/gnupg/S.gpg-agent /c/Users/USERNAME/AppData/Roaming/gnupg/S.gpg-agent.extra
```

Note that the remote agent-socket is first, followed by the local agent extra socket. On
Windows systems the `C:\...` path should be translated as shown in the above example.
If you use gpg on the remote system already, you may need to delete the gpg-agent
file that already exists.

### Using SSH/GPG Keys on the Remote Server

This is a less secure method as the remote server has your ssh/gpg keys that could be
compromised. This method should only be used if you are unable to get GPG agent forwarding
working, which can occasionally occur between some client and SSH host OS's.

#### GnuPG (Commit signing)

Most developers have a primary key they regularly use. To prevent this key from possibly
leaking its recommended to generate a new key for the remote machine with a rather long
randomly generated password you keep in a password manager.

1. Install gnupg on remote server

   ```bash
   sudo apt-get install gnupg
   ```

1. Create a new gpg key

   ```bash
   gpg --default-new-key-algo rsa4096 --gen-key
   ```

1. Enter your name and e-mail address to use.
1. Set the password from the password manager
1. Run npm install in a separate window to help generate sufficient randomness
   on the server
1. Tell git about your gpg key
1. Auto-sign commits per project or everywhere
1. Add your GPG public key to your GitHub account
1. Ensure that your bash account prompts you for the GPG passphrase correctly by
   editing your `~/.bashrc` with:

   ```bash
   GPG_TTY=\$(tty)
   export GPG_TTY
   ```

[getting-started]: https://code.visualstudio.com/docs/getstarted/userinterface
[add-folder]: https://code.visualstudio.com/docs/editor/multi-root-workspaces#_adding-folders
[debug-view]: https://code.visualstudio.com/docs/editor/debugging#_debug-view
[github-coauthor]: https://help.github.com/en/github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors
[command-palette]: https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette
[liveshare-ext-pack]: https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack
[introducing-liveshare]: https://code.visualstudio.com/blogs/2017/11/15/live-share
[liveshare-use-cases]: https://docs.microsoft.com/en-us/visualstudio/liveshare/reference/use-cases
[liveshare-feature-overview]: https://docs.microsoft.com/en-us/visualstudio/liveshare/overview/features
[remote-dev]: https://code.visualstudio.com/docs/remote/remote-overview
