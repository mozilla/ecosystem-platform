# Mozilla accounts & Subscription Platform C4 Model

The software architecture diagrams in FxA and SubPlat use the [c4 model](https://c4model.com) to separate layers and [structurizr](https://structurizr.com/) to render them.

## Editing / Creating C4 Model Diagrams Overview

For consistency in the exported workspace and diagram naming, ensure that the FxA/SubPlat workspace is the first one in structurizr (default if its the only/first workspace created).

1. Run the structurizr docker container
2. Import the `structurizr-workspace.json` file (restores DSL and manual adjustments)
3. Edit the `.dsl` file in this directory as needed
4. Copy the updated DSL content into the DSL editor in structurizr
5. Make any manual layout changes needed in the UI
6. Export the workspace JSON to save updates to this directory
7. Create a PR with the new diagrams, workspace JSON, and DSL file

## Running the Structurizr Container

The port used by default for structurizr overlaps with ports needed by the FxA stack. The FxA stack should be not running before starting structurizr.

1. Create a local structurizr directory in your home directory:
   ```bash
   $ mkdir -p ~/structurizr
   ```
2. Configure structurizr to enable the DSL Editor:
   ```bash
   $ echo 'structurizr.feature.ui.dslEditor=true' > ~/structurizr/structurizr.properties
   ```
3. Run the docker container:
   ```bash
   $ docker-compose up
   ```
4. Create a new workspace if none exist
5. Import the workspace file as noted above

Visiting `http://localhost:8080/` will present the structurizr interface, the default credentials are:

```
username: structurizr
password: password
```

## Exporting Diagrams

1. In structurizr, click on `Diagrams` on the right side
2. In the top menu, click the `PNG` icon to export
3. Select the following options and click `Export all diagrams` with:
   - Include diagram title, description, and metadata
   - Automatically download
4. Copy images into `static/diagrams` directory
