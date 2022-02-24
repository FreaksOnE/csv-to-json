/* eslint-disable unicorn/prefer-node-protocol */
import {Command/* , Flags */} from '@oclif/core'
import {createReadStream, createWriteStream, existsSync} from 'fs'
import * as csv from 'csv-parser'

export default class Convert extends Command {
  static description = 'Convert a csv file to json file'

  static aliases = ['default']

  static examples = [
    '$ convert-csv-to-json data.csv',
  ]

  static flags = {
    // from: Flags.string({char: 'i', description: 'Path to csv file to convert to json', required: false}),
  }

  static args = [{name: 'input', description: 'Path to csv file to convert to json', required: true}]

  async run(): Promise<void> {
    const {args/* , flags */} = await this.parse(Convert)

    type IRecord = Record<string, any>
    const outputName = `${args.input.split('.csv')[0]}.json`

    if (!existsSync(args.input)) {
      throw new Error(`Input file ${args.input} does not exist`)
    }

    if (existsSync(outputName)) {
      throw new Error(`Output file ${outputName} exists`)
    }

    this.log(`Converting ${args.input} to ${outputName}`)

    const writeStream = createWriteStream(outputName, {flags: 'a'})

    writeStream.write('[\n')

    let isFirstLine = true

    createReadStream(args.input)
    .pipe(csv())
    .on('data', (record: IRecord) => {
      if (!isFirstLine) writeStream.write(',\n')
      writeStream.write('  ')
      writeStream.write(JSON.stringify(record))
      isFirstLine = false
    })
    .on('error', (error: Error) => {
      this.error(error)
    })
    .on('end', () => {
      writeStream.write('\n]\n')
      writeStream.close()
      this.log('Done.')
    })
  }
}
