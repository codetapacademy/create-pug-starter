// require dependencies not included with node
const shell = require('shelljs')
const colors = require('colors')

const createTheNewWebsite = websiteName => {
  return new Promise(
    resolve => {
      if (websiteName) {
        shell.exec(`git clone https://github.com/marianzburlea/pug-starter ${websiteName}`, () => {
          console.log(`Let's build the amazing website ${websiteName}. Step 1.`)
          resolve(true)
        })
      }
      else {
        console.log(`You want to give a name to your website`.red)
        console.log(`You want to type something like:`.blue)
        console.log(`create-pug-starter my-awesome-website`.green)
        console.log(`and press the [Enter] key`.blue)
        resolve(false)
      }
    }
  )
}

module.exports = createTheNewWebsite
