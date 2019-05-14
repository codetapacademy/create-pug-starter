// require dependencies not included with node
const shell = require('shelljs')
const colors = require('colors')


const installAllDependenciesSoNewbiesDoNotHaveTo = () => {
  return new Promise(
    resolve => {
      shell.exec(`npm i`, () => {
        console.log("\nFinished installing packages\n".green)
        resolve()
      })
    }
  )
}

module.exports = installAllDependenciesSoNewbiesDoNotHaveTo