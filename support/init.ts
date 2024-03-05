const fs = require('fs-extra')

function createFolder(folderName: string) {
  try {
    const directory: string = __dirname
    fs.emptyDir(folderName)
    console.log(`Created! Folder ${folderName} - ${directory}`)
  } catch (err) {
    console.error(`Failed! Folder ${folderName}`)
    console.error(`Error! ${err}`)
  }
}
createFolder('test-result')
