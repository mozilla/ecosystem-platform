"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[4692],{11614:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"how-tos/using-vscode-with-fxa","title":"Using VS Code with FxA","description":"Getting Started","source":"@site/docs/how-tos/using-vscode-with-fxa.md","sourceDirName":"how-tos","slug":"/how-tos/using-vscode-with-fxa","permalink":"/ecosystem-platform/how-tos/using-vscode-with-fxa","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/using-vscode-with-fxa.md","tags":[],"version":"current","frontMatter":{"title":"Using VS Code with FxA"},"sidebar":"docs","previous":{"title":"Tracing for Local Development","permalink":"/ecosystem-platform/how-tos/using-tracing-locally"},"next":{"title":"Working with Metrics","permalink":"/ecosystem-platform/how-tos/working-with-metrics"}}');var t=s(74848),i=s(28453);const r={title:"Using VS Code with FxA"},a=void 0,l={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Extensions",id:"extensions",level:2},{value:"Multi-Root Workspaces",id:"multi-root-workspaces",level:2},{value:"Using the VS Code Debugger",id:"using-the-vs-code-debugger",level:2},{value:"Collaborative Coding / Review",id:"collaborative-coding--review",level:2},{value:"Collaborator Commits",id:"collaborator-commits",level:3},{value:"Remote Development via SSH",id:"remote-development-via-ssh",level:2},{value:"SSH Tips/Tricks",id:"ssh-tipstricks",level:3},{value:"Port Forwarding",id:"port-forwarding",level:4},{value:"Increase File watch Limit",id:"increase-file-watch-limit",level:3},{value:"Git",id:"git",level:3},{value:"Using SSH/GPG Agent Forwarding",id:"using-sshgpg-agent-forwarding",level:3},{value:"VS Code",id:"vs-code",level:4},{value:"SSH Config",id:"ssh-config",level:4},{value:"Using SSH/GPG Keys on the Remote Server",id:"using-sshgpg-keys-on-the-remote-server",level:3},{value:"GnuPG (Commit signing)",id:"gnupg-commit-signing",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(n.p,{children:["To get familiar with VS Code it's recommended to read the ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/docs/getstarted/userinterface",children:"getting started"}),"\nsection of the VS Code docs so you're familiar with the UI terminology."]}),"\n",(0,t.jsx)(n.h2,{id:"extensions",children:"Extensions"}),"\n",(0,t.jsx)(n.p,{children:"Opening the FxA repository will result in VS Code prompting you (in the lower right\nof your VS Code Window) to install the project's \"Recommended Extensions\". These include\nall the common extensions that will help in working with the FxA project's\npackages."}),"\n",(0,t.jsx)(n.h2,{id:"multi-root-workspaces",children:"Multi-Root Workspaces"}),"\n",(0,t.jsxs)(n.p,{children:["In VS code, you typically open up a folder and the ",(0,t.jsx)(n.code,{children:".vscode"})," directory inside\nis used for the project's debugging/task configurations and settings. Since the\nFxA repository is a mono-repo containing many individual packages, a single\nglobal ",(0,t.jsx)(n.code,{children:".vscode"})," in the root directory is used for monorepo-wide settings and\nto recommend extensions. However, there are ",(0,t.jsx)(n.code,{children:".vscode"})," directories within the\nindividual ",(0,t.jsx)(n.code,{children:"packages/*"})," that add additional package specific debugging/task\nconfigurations."]}),"\n",(0,t.jsx)(n.p,{children:"To utilize these you can open the desired package folder directly or use a\nmulti-root workspace. Using the multi-root workspace feature allows you to add\nmultiple package folders to your workspace which enables all of their individual\ndebugging/task configurations."}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces#_adding-folders",children:"VS Code docs"})," for instructions on how to add a folder to your workspace.\nNote that the first time you add a folder it will create a new Unnamed Workspace. You\ncan save the workspace as a file to easily resume the chosen open package folders\nfor future use as well."]}),"\n",(0,t.jsx)(n.h2,{id:"using-the-vs-code-debugger",children:"Using the VS Code Debugger"}),"\n",(0,t.jsxs)(n.p,{children:["Once you have added a folder to your workspace, the additional debug/task settings\nwill be available in the ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/debugging#_debug-view",children:"Debug View"}),". If you don't see any after adding\na package folder with a ",(0,t.jsx)(n.code,{children:".vscode"})," directory, you may need to run 'Developer: Reload Window'\nfrom the ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette",children:"command palette"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The following videos show how to run test tasks and the FxA Auth Server with the debugger."}),"\n",(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/g5b-3XSSqdU",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/jyqrV3NcLfc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,t.jsx)(n.h2,{id:"collaborative-coding--review",children:"Collaborative Coding / Review"}),"\n",(0,t.jsxs)(n.p,{children:["The recommended extensions for FxA install the ",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack",children:"LiveShare Extension Pack"}),"\nwhich includes the ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/blogs/2017/11/15/live-share",children:"LiveShare extension"}),". Using this extension\nyou can share your editing and debugging environment including local terminals and the\ndebug session with invited developers."]}),"\n",(0,t.jsxs)(n.p,{children:["VS Code has ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/visualstudio/liveshare/reference/use-cases",children:"documented common use-cases for Live Share"})," that provide\nuseful tips for setting up collaborative coding sessions. A good jumping off point to\nlearn more features available is the ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/visualstudio/liveshare/overview/features",children:"LiveShare feature overview"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"collaborator-commits",children:"Collaborator Commits"}),"\n",(0,t.jsxs)(n.p,{children:["When working collaboratively, the final commit should reflect all the collaborators that\nworked on it. ",(0,t.jsxs)(n.a,{href:"https://help.github.com/en/github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors",children:["GitHub properly displays commits written with the ",(0,t.jsx)(n.code,{children:"Co-Authored-by"})]}),"\nline appended to the commit message."]}),"\n",(0,t.jsx)(n.h2,{id:"remote-development-via-ssh",children:"Remote Development via SSH"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/docs/remote/remote-overview",children:"Remote development"})," allows you to run the VS Code user interface on your\nlocal machine while a core VS Code instance is run on a remote machine either via SSH,\nWSL, docker Containers, or VS Online Azure instances. These instructions are tips for\nsetting up VS Code to work with a remote instance via SSH, and ",(0,t.jsx)(n.strong,{children:"should be run on the\nremote instance"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"ssh-tipstricks",children:"SSH Tips/Tricks"}),"\n",(0,t.jsx)(n.p,{children:"Copy your local ssh public key to the remote machine on setup, this will create a user\nwith the username from your ssh keys email address."}),"\n",(0,t.jsx)(n.h4,{id:"port-forwarding",children:"Port Forwarding"}),"\n",(0,t.jsxs)(n.p,{children:["It's useful to configure the forwards for FxA in your ",(0,t.jsx)(n.code,{children:"~/.ssh/config"})," file so that\nthey're always active upon loading up VS Code. An example is shown below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"title=~/.ssh/config",children:'Host remotedev\n  HostName yourServerIpAddress\n  User yourUsername\n  IdentityFile "C:\\Users\\yourUsername\\.ssh\\id_rsa_vs_code"\n  LocalForward 1080 localhost:1080\n  LocalForward 1111 localhost:1111\n  LocalForward 1112 localhost:1112\n  LocalForward 3030 localhost:3030\n  LocalForward 3031 localhost:3031\n  LocalForward 8080 localhost:8080\n  LocalForward 9000 localhost:9000\n  LocalForward 9010 localhost:9010\n  LocalForward 9292 localhost:9292\n  # vnc port\n  LocalForward 5901 localhost:5901\n'})}),"\n",(0,t.jsx)(n.h3,{id:"increase-file-watch-limit",children:"Increase File watch Limit"}),"\n",(0,t.jsxs)(n.p,{children:["Add this line to the end of ",(0,t.jsx)(n.code,{children:"/etc/sysctl.conf"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"title=/etc/sysctl.conf",children:"fs.inotify.max_user_watches=524288\n"})}),"\n",(0,t.jsx)(n.p,{children:"Reload sysctl settings:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo sysctl -p\n"})}),"\n",(0,t.jsx)(n.h3,{id:"git",children:"Git"}),"\n",(0,t.jsx)(n.p,{children:"Set your email/username:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'git config --global user.email "you@example.com"\ngit config --global user.name "Your Name"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Configure your favorite editor for commit messages (vim):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git config --global core.editor vim\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-sshgpg-agent-forwarding",children:"Using SSH/GPG Agent Forwarding"}),"\n",(0,t.jsx)(n.p,{children:"For security reasons it\u2019s useful to avoid leaving SSH/GPG keys on remote development\ninstances."}),"\n",(0,t.jsx)(n.h4,{id:"vs-code",children:"VS Code"}),"\n",(0,t.jsx)(n.p,{children:"Enable agent forwarding option:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"User Settings -> Search for \u2018agent\u2019"}),", verify ",(0,t.jsx)(n.code,{children:"Remote.SSH: Enable Agent Forwarding"}),"\nis checked."]}),"\n",(0,t.jsx)(n.h4,{id:"ssh-config",children:"SSH Config"}),"\n",(0,t.jsxs)(n.p,{children:["Ensure you are running a local ssh-agent. You can see whether your agent is running\nand has keys added to it by running ",(0,t.jsx)(n.code,{children:"ssh-add -l"})," locally. If you do not see your keys,\nrun ssh-add and it will prompt to add your default keys or view the ssh-add docs to\nadd specific keys to your agent."]}),"\n",(0,t.jsx)(n.p,{children:"Additional instructions for ensuring your ssh-agent is running."}),"\n",(0,t.jsxs)(n.p,{children:["You will then need to add the appropriate setting to your ",(0,t.jsx)(n.code,{children:"~/.ssh/config"})," file used\nwith VS Code. For the host in your config file, add ",(0,t.jsx)(n.code,{children:"ForwardAgent yes"}),", as shown:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"title=~/.ssh/config",children:"Host remotedev\nHostName REMOTE_HOST\nUser REMOTE_USERNAME\nForwardAgent yes\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Open a VS Code session to the remote host, and in the Terminal window run ",(0,t.jsx)(n.code,{children:"ssh-add -l"}),"\nto verify the keys from the SSH agent are available. GPG Configuration Based on the\nGnuPG Agent Forwarding documentation."]}),"\n",(0,t.jsx)(n.p,{children:"On your local machine get the location of the extra GPG socket:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpgconf --list-dir agent-extra-socket\n"})}),"\n",(0,t.jsx)(n.p,{children:"Install gnupg on remote server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install gnupg\n"})}),"\n",(0,t.jsx)(n.p,{children:"On the remote machine, get the location of the GPG socket:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpgconf --list-dir agent-socket\n"})}),"\n",(0,t.jsxs)(n.p,{children:["On the remote machine, edit the ",(0,t.jsx)(n.code,{children:"/etc/ssh/sshd_config"})," file to add:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"title=/etc/ssh/sshd_config",children:"StreamLocalBindUnlink yes\n"})}),"\n",(0,t.jsx)(n.p,{children:"Restart the remote machine\u2019s sshd service"}),"\n",(0,t.jsxs)(n.p,{children:["Ensure that your bash account prompts you for the GPG passphrase correctly by editing\nyour ",(0,t.jsx)(n.code,{children:"~/.bashrc"})," with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"GPG_TTY=\\$(tty)\nexport GPG_TTY\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Export your GPG public keys and import them on the remote machine.\nEdit the local ",(0,t.jsx)(n.code,{children:"~/.ssh/config"})," file used with VS Code to include the GPG agent socket:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"title=~/.ssh/config",children:"Host remotedev\nHostName REMOTE_HOST\nUser REMOTE_USERNAME\nForwardAgent yes\nRemoteForward /run/user/1000/gnupg/S.gpg-agent /c/Users/USERNAME/AppData/Roaming/gnupg/S.gpg-agent.extra\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that the remote agent-socket is first, followed by the local agent extra socket. On\nWindows systems the ",(0,t.jsx)(n.code,{children:"C:\\..."})," path should be translated as shown in the above example.\nIf you use gpg on the remote system already, you may need to delete the gpg-agent\nfile that already exists."]}),"\n",(0,t.jsx)(n.h3,{id:"using-sshgpg-keys-on-the-remote-server",children:"Using SSH/GPG Keys on the Remote Server"}),"\n",(0,t.jsx)(n.p,{children:"This is a less secure method as the remote server has your ssh/gpg keys that could be\ncompromised. This method should only be used if you are unable to get GPG agent forwarding\nworking, which can occasionally occur between some client and SSH host OS's."}),"\n",(0,t.jsx)(n.h4,{id:"gnupg-commit-signing",children:"GnuPG (Commit signing)"}),"\n",(0,t.jsx)(n.p,{children:"Most developers have a primary key they regularly use. To prevent this key from possibly\nleaking it's recommended to generate a new key for the remote machine with a rather long\nrandomly generated password you keep in a password manager."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install gnupg on remote server"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install gnupg\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a new gpg key"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --default-new-key-algo rsa4096 --gen-key\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Enter your name and e-mail address to use."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set the password from the password manager"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run npm install in a separate window to help generate sufficient randomness\non the server"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Tell git about your gpg key"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Auto-sign commits per project or everywhere"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add your GPG public key to your GitHub account"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Ensure that your bash account prompts you for the GPG passphrase correctly by\nediting your ",(0,t.jsx)(n.code,{children:"~/.bashrc"})," with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"GPG_TTY=\\$(tty)\nexport GPG_TTY\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var o=s(96540);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);