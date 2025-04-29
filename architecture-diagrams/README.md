# Mozilla accounts & Subscription Platform C4 Model

The software architecture diagrams in FxA and SubPlat use the [c4 model](https://c4model.com) to separate layers and [structurizr](https://structurizr.com/) to render them.

## Overall Process for Editing / Creating C4 Model Diagrams Overview

This assumes you have a copy of the ecosystem-platform documentation checked out and are in the root.

0. `docker pull structurizr/lite`
0. `cd architecture-diagrams` (that's the directory this file is in)
0. `docker run -it --rm -p 8080:8080 -v $(pwd):/usr/local/structurizr -e STRUCTURIZR_WORKSPACE_FILENAME=fxa-subplat structurizr/lite` .  This starts an interactive docker container passing through the current directory as the working directory for structurizr.
0. Load <a href="http://localhost:8080">http://localhost:8080</a> in your browser.   
