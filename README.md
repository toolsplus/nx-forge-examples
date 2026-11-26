# Nx Forge Examples

[![CI](https://github.com/toolsplus/nx-forge-examples/actions/workflows/ci-main.yml/badge.svg)](https://github.com/toolsplus/nx-forge-examples/actions/workflows/ci-main.yml)

This repository contains example [Nx Forge](https://github.com/toolsplus/nx-forge) setups with different tooling.

## Projects

| Project                | Type                    | Description                                                                             |
| ---------------------- | ----------------------- | --------------------------------------------------------------------------------------- |
| `nx-forge-app-esbuild` | Forge app               | Built with esbuild. Has a Jira global page (Custom UI) and a Jira admin page (UI Kit).  |
| `nx-forge-app-webpack` | Forge app               | Built with Webpack. Has a Jira global page (Custom UI) and a Rovo agent with an action. |
| `jira-global-page`     | Custom UI (React)       | Calls the app's resolver and opens `modal-dialog`.                                      |
| `modal-dialog`         | Custom UI (React)       | A modal dialog that the global page opens with the `Modal` API of `@forge/bridge`.      |
| `ui-kit-app`           | UI Kit (`@forge/react`) | Calls the app's resolver.                                                               |

Each Forge app's `manifest.yml` references Custom UI and UI Kit projects by their project name in `resources[].path`. Nx Forge adds them to the project graph and copies their build output into the Forge app when packaging. See [the project graph docs](https://toolsplus.github.io/nx-forge/concepts/project-graph).

The Forge apps use [manual packaging](https://github.com/toolsplus/nx-forge/blob/beta/docs/guides/upgrading-to-v10.md): the `build` target writes a bundle with all npm dependencies to `dist/apps/<app>/functions`, and `forge deploy` uploads it as it is.

## Tasks

Nx Forge infers the `package`, `deploy`, `tunnel`, `register` and `forge` targets for every project with a `manifest.yml`. The `nx.json` adds two target defaults:

- `package` depends on `build`, and enables `uiKit2Packaging`, which UI Kit resources need.
- `deploy` depends on `package`.

Deploy a Forge app to the development environment with:

```shell
npx nx deploy nx-forge-app-esbuild
```

Start a tunnel, including dev servers for the Custom UI projects, with:

```shell
npx nx tunnel nx-forge-app-esbuild
```

Run any other Forge CLI command for a Forge app with the `forge` target, for example:

```shell
npx nx forge nx-forge-app-esbuild variables list
```

The workspace installs the Forge CLI as a dev dependency, so these commands use the version in `package.json`. Log in once with `npx forge login`.

## Running tasks

To execute tasks with Nx use the following syntax:

```shell
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```shell
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```shell
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Run `npx nx show project <project>` to see a project's targets, including the inferred ones. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Explore the Project Graph

Run `npx nx graph` to show the graph of the workspace.
