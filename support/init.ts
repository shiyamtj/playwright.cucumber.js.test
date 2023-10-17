const fs = require('fs-extra')

function createFolder(folderName: string) {
  try {
    fs.emptyDir(folderName)
    console.log(`Created! Folder ${folderName}`)
  } catch (err) {
    console.error(`Failed! Folder ${folderName}`)
    console.error(`Error! ${err}`)
  }
}

createFolder('cucumber-report')
createFolder('test-result')
