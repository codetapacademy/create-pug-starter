// require dependencies not included with node
const shell = require('shelljs')
const colors = require('colors')

const changeIntoTheNewWebsite = websiteName => {
  return new Promise(
    resolve => {
      if (websiteName) {
        shell.exec(`cd ${websiteName} && npm i`, () => {
          console.log(`cd ${websiteName}`)
          console.log(sh)
          console.log(`Change into our new ${websiteName}. Step 2.`)
          resolve()
        })
      }
    }
  )
}

module.exports = changeIntoTheNewWebsite