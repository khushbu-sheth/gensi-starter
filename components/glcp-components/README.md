# Component Library

**Do not change any files in this folder unless you are copying newer versions from [glcp/frontend](https://github.com/glcp/frontend)**

### Background

Currently, there is no timeline or active work to make a shared component library for use by standalone UIs within GLCP. There are aspirational plans to library-ize the components in [glcp/frontend](https://github.com/glcp/frontend) but so far there is no actual movement. Therefore, in order to use "shared components" the only real option we have is to duplicate them.

There is a plan which is further along to have a [web components based GLCP header](https://koan-mfe-host.vercel.app/) to be shared by UIs with GLCP. The decision has been made to go with duplicated components for now because there is still a possibility that this project gets moved up in priority and needs to be quickly merged into the glcp/frontend monolith. To prevent future headaches in the case of that possibility, we want to be as similar from a technology standpoint to the monolith as possible.
