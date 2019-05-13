#!/usr/bin/env node

// require dependencies included with node
const fileSystem = require('fs')

// require dependencies not included with node
const shell = require('shelljs')
const colors = require('colors')

// prepare website folder structure
const websiteName = process.argv[2]
const websiteFolder = `${process.cwd()}/${websiteName}`
console.log(websiteFolder)

