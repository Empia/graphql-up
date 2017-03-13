#!/usr/bin/env node

import * as minimist from 'minimist'
import * as chalk from 'chalk'
import figures = require('figures')
import fetch from 'node-fetch'
import * as fs from 'fs'
import * as path from 'path'
import { usageRoot } from './usage'
const {Spinner} = require('cli-spinner')

const {version} = require('../package.json')

async function main() {
  const argv = minimist(process.argv.slice(2))

  process.stdout.write('\n')

  if (argv['help'] || argv['h']) {
    process.stdout.write(usageRoot)
    process.exit(0)
  }

  if (argv['version'] || argv['v']) {
    console.log(version)
    process.exit(0)
  }

  const schemaProp = argv._[0]

  if (!schemaProp) {
    process.stdout.write(usageRoot)
    process.exit(0)
  }

  const spinner = new Spinner(`  ${chalk.blue('%s')}  Creating your GraphQL API... `)
  spinner.setSpinnerString(Spinner.spinners[20])
  spinner.start()

  const schema = await getSchema(schemaProp)

  const response = await fetch('https://graphql-up-api.graph.cool/create', {
    method: 'post',
    body: JSON.stringify({schema}),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const body = await response.json()

  spinner.stop(true)

  if (!response.ok) {
    console.log(`  ${chalk.red(figures.cross)}  There was an error:\n`)
    console.log(body.message)
    process.exit(1)
  }

  const message = `  ${chalk.green(figures.tick)}  Your GraphQL API is ready to use. Here are your endpoints:
 
    ${chalk.blue(figures.pointer)} Simple API: https://api.graph.cool/simple/v1/${body.project.alias}
    ${chalk.blue(figures.pointer)} Relay API:  https://api.graph.cool/relay/v1/${body.project.alias}


  ${chalk.bold('Open your GraphQL endpoint in a browser to use the interactive API Playground.')}

  API Documentation: https://www.graph.cool/docs/graphql-up/`

  console.log(message)
}

async function getSchema(schemaProp: string): Promise<string> {
  if (schemaProp.startsWith('http')) {
    const response = await fetch(schemaProp)
    return await response.text()
  } else {
    return fs.readFileSync(path.resolve(schemaProp)).toString()
  }
}

function onError(e: Error) {
  console.log(`${chalk.red(figures.cross)} Error: ${e.message}\n`)
  console.log(e.stack)
  process.exit(1)
}

process.on('unhandledRejection', e => onError(e))

main().catch(e => onError(e))
