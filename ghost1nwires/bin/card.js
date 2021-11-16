#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict'

const fs = require('fs')
const path = require('path')
const output = fs.readFileSync(path.join(__dirname, 'output'), 'utf8')
console.log(output)



// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Hanifah Hadirah'),
  handle: chalk.cyan('@ghost1inwires'),
  labelWork: chalk.white.bold('      Work:'),
  work: chalk.white('CEO and Co-Founder of LuCipher Inc'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  twitter: chalk.cyan('https://twitter.com/ghostinwires_'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  github: chalk.cyan('https://github.com/ghost1nwires'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  linkedin: chalk.cyan('https://my.linkedin.com/in/hanifahhadirah'),
  labelCard: chalk.white.bold('      Card:'),
  npx: chalk.white('npx natterstefan'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen
// effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))
