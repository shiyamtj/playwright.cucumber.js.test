const fs = require('fs-extra')

async function createFolder(folderName: string) {
  try {
    await fs.emptyDir(folderName)
    console.log(`Created! Folder ${folderName}`)
  } catch (err) {
    console.error(`Failed! Folder ${folderName}`)
    console.error(`Error! ${err}`)
  }
}

createFolder('cucumber-report')
createFolder('test-result')
