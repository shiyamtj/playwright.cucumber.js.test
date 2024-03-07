import {
  Before,
  After,
  BeforeAll,
  AfterAll,
  Status,
  AfterStep,
  BeforeStep,
} from '@cucumber/cucumber'
import { Browser, BrowserContext, Page, chromium } from '@playwright/test'
import { pageFixture } from './pageFixture'
import { InvokeBrowser } from './browserManager'
import { getEnv } from './env/env'
import { createLogger } from 'winston'
import { options } from './logger'
const fs = require('fs-extra')

let browser: Browser
let context: BrowserContext
let page: Page

BeforeAll(async function () {
  getEnv()
  browser = await InvokeBrowser()
})

Before(async function ({ pickle }) {
  const scenarioName = pickle.name + pickle.id

  context =
    process.env.VIDEO === 'true'
      ? await browser.newContext({
          recordVideo: {
            dir: './test-result/videos',
          },
        })
      : await browser.newContext()
  page = await context.newPage()
  pageFixture.page = page
  pageFixture.logger = createLogger(options(scenarioName))
})

After(async function ({ pickle, result }) {
  let videoPath: string
  let img: Buffer

  if (result?.status === Status.FAILED || result?.status === Status.PASSED) {
    img = await pageFixture.page.screenshot({
      path: `./test-result/screenshots/${pickle.name}.png`,
      type: 'png',
    })

    if (process.env.VIDEO === 'true') {
      videoPath = await pageFixture.page.video().path()
    }
  }
  await pageFixture.page.close()
  await context.close()

  if (result?.status === Status.FAILED) {
    await this.attach(img, 'image/png')

    if (process.env.VIDEO === 'true') {
      await this.attach(fs.readFileSync(videoPath), 'video/webm')
    }
  }
})

AfterAll(async function () {
  await browser.close()
})

BeforeStep(async function () {})

AfterStep(async function ({ pickle, result }) {
  // const screenshotImage = await page.screenshot({
  //   path: `./test-result/screenshots/${pickle.name}`,
  //   type: 'png',
  // })
  // await this.attach(screenshotImage, 'image/png')
})

const getTime = () => {
  const date = new Date()
  const formattedDate = date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  })
  return formattedDate
}
