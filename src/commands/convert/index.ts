/* eslint-disable no-warning-comments */
/* eslint-disable unicorn/prefer-node-protocol */
import {Command, Flags} from '@oclif/core'
import {createReadStream, createWriteStream, existsSync} from 'fs'
import * as csv from 'csv-parser'
import createCliProgress from '../../create-cli-progress'

const countFileLines = (filePath: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    let lineCount = 0
    createReadStream(filePath)
    .on('data', (buffer: Buffer) => {
      let idx = -1
      lineCount-- // Because the loop will run once for idx=-1
      do {
        idx = buffer.indexOf(10, idx + 1)
        lineCount++
      } while (idx !== -1)
    }).on('end', () => {
      resolve(lineCount)
    }).on('error', reject)
  })
}

export default class Convert extends Command {
  static description = 'Convert a csv file to json file'

  static aliases = ['default']

  static examples = [
    '$ convert-csv-to-json data.csv',
  ]

  static flags = {
    utf8: Flags.boolean({name: 'utf8', description: 'Force output encoding to utf8', required: false}),
  }

  static args = [
    {name: 'input', description: 'Path to csv file to convert to json', required: true},
  ]

  // TODO: add loading
  // get the file lines
  // count written records
  // and calculate loading percent
  async run(): Promise<void> {
    const {args, flags} = await this.parse(Convert)

    type IRecord = Record<string, any>
    const outputName = `${args.input.split('.csv')[0]}.json`

    if (!existsSync(args.input)) {
      throw new Error(`Input file ${args.input} does not exist`)
    }

    if (existsSync(outputName)) {
      throw new Error(`Output file ${outputName} exists`)
    }

    this.log(`Converting ${args.input} to ${outputName}`)

    const writeStream = createWriteStream(outputName, {
      encoding: flags.utf8 ? 'utf8' : undefined,
      flags: 'a',
    })

    writeStream.write('[\n')

    let isFirstLine = true

    const loadingBar = createCliProgress({
      name: 'convert-csv-to-json',
    })

    const fileLines = await countFileLines(args.input)

    loadingBar.start(fileLines - 1, 0)

    createReadStream(args.input, {
      encoding: flags.utf8 ? 'utf8' : undefined,
    })
    .pipe(csv())
    .on('data', (record: IRecord) => {
      if (!isFirstLine) writeStream.write(',\n')
      writeStream.write('  ')
      writeStream.write(JSON.stringify(record))
      isFirstLine = false
      loadingBar.increment(1)
    })
    .on('error', (error: Error) => {
      loadingBar.stop()
      this.error(error)
    })
    .on('end', () => {
      writeStream.write('\n]\n')
      loadingBar.stop()
      this.log('Done.')
    })
  }
}
