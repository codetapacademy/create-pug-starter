#!/usr/bin/env node

// require dependencies included with node
const fileSystem = require('fs')

// require local
const createTheNewWebsite = require('./lib/create-the-new-website')
const changeIntoTheNewWebsite = require('./lib/change-into-the-new-website')
const installAllDependenciesSoNewbiesDoNotHaveTo = require('./lib/install-dependencies')

// prepare website folder structure
const websiteName = process.argv[2]
const websiteFolder = `${process.cwd()}/${websiteName}`
console.log(websiteFolder)

const run = async () => {
  let success = await createTheNewWebsite(websiteName)

  if (!success) {
    console.log(`The hamsters are going mad. Did you feed them?`)
    return !1
  }

  await changeIntoTheNewWebsite(websiteName)
  // await installAllDependenciesSoNewbiesDoNotHaveTo()
  console.log(`We're ready to rock! If you like it visit https://courses.codetap.academy and consider supporting us to keep developing more for YOU!`)
}

run()
