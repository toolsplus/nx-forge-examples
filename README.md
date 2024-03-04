# Nx Forge Examples

This repository contains example [Nx Forge](https://github.com/toolsplus/nx-forge) setups with different tooling.

## General setup

This workspace is a standard Nx workspace. However, some default configurations in [the `nx.json`](https://nx.dev/reference/nx-json#nxjson) worth mentioning:

### Package executor

We define a default `package` target configuration in the `nx.json` > `targetDefaults.package` that defines that the package target depends on the build target, i.e. before running the package target the build target has to complete.

To enable the `package` target on a Forge app project simply add the following `package` target definition to the project's project.json: `"package": {}`.

### Forge executor

We define a `forge` executor target definition in `nx.json` that allows to run arbitrary Forge CLI commands for any Forge app.

To enable the `forge` target on a Forge app project simply add the following `forge` target definition to the project's project.json: `"forge": {}`.

After that, run any Forge CLI command as follows:

```shell
nx forge <my-forge-app> variables list
```

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Explore the Project Graph
Run `nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.
