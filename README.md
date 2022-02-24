oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g csv-to-json
$ csv-to-json COMMAND
running command...
$ csv-to-json (--version)
csv-to-json/0.0.0 linux-x64 node-v16.14.0
$ csv-to-json --help [COMMAND]
USAGE
  $ csv-to-json COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`csv-to-json hello PERSON`](#csv-to-json-hello-person)
* [`csv-to-json hello world`](#csv-to-json-hello-world)
* [`csv-to-json help [COMMAND]`](#csv-to-json-help-command)
* [`csv-to-json plugins`](#csv-to-json-plugins)
* [`csv-to-json plugins:inspect PLUGIN...`](#csv-to-json-pluginsinspect-plugin)
* [`csv-to-json plugins:install PLUGIN...`](#csv-to-json-pluginsinstall-plugin)
* [`csv-to-json plugins:link PLUGIN`](#csv-to-json-pluginslink-plugin)
* [`csv-to-json plugins:uninstall PLUGIN...`](#csv-to-json-pluginsuninstall-plugin)
* [`csv-to-json plugins update`](#csv-to-json-plugins-update)

## `csv-to-json hello PERSON`

Say hello

```
USAGE
  $ csv-to-json hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/FreaksOnE/csv-to-json/blob/v0.0.0/dist/commands/hello/index.ts)_

## `csv-to-json hello world`

Say hello world

```
USAGE
  $ csv-to-json hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `csv-to-json help [COMMAND]`

Display help for csv-to-json.

```
USAGE
  $ csv-to-json help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for csv-to-json.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `csv-to-json plugins`

List installed plugins.

```
USAGE
  $ csv-to-json plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ csv-to-json plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `csv-to-json plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ csv-to-json plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ csv-to-json plugins:inspect myplugin
```

## `csv-to-json plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ csv-to-json plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ csv-to-json plugins add

EXAMPLES
  $ csv-to-json plugins:install myplugin 

  $ csv-to-json plugins:install https://github.com/someuser/someplugin

  $ csv-to-json plugins:install someuser/someplugin
```

## `csv-to-json plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ csv-to-json plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ csv-to-json plugins:link myplugin
```

## `csv-to-json plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ csv-to-json plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ csv-to-json plugins unlink
  $ csv-to-json plugins remove
```

## `csv-to-json plugins update`

Update installed plugins.

```
USAGE
  $ csv-to-json plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
