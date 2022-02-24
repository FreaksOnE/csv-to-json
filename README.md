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
csv-to-json/1.0.0 linux-x64 node-v16.14.0
$ csv-to-json --help [COMMAND]
USAGE
  $ csv-to-json COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`csv-to-json convert [INPUT]`](#csv-to-json-convert-input)
* [`csv-to-json help [COMMAND]`](#csv-to-json-help-command)

## `csv-to-json convert [INPUT]`

Convert a csv file to json file

```
USAGE
  $ csv-to-json convert [INPUT] [-i <value>]

ARGUMENTS
  INPUT  Path to csv file to convert to json

FLAGS
  -i, --from=<value>  Path to csv file to convert to json

DESCRIPTION
  Convert a csv file to json file

ALIASES
  $ csv-to-json default

EXAMPLES
  $ convert-csv-to-json data.csv
```

_See code: [dist/commands/convert/index.ts](https://github.com/FreaksOnE/csv-to-json/blob/v1.0.0/dist/commands/convert/index.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.11/src/commands/help.ts)_
<!-- commandsstop -->
