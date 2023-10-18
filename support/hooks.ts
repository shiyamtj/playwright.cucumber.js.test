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

let browser: Browser
let context: BrowserContext
let page: Page

BeforeAll(async function () {
  getEnv()
  browser = await InvokeBrowser()
})

Before(async function () {
  context = await browser.newContext()
  page = await context.newPage()
  pageFixture.page = page
})

After(async function ({ pickle, result }) {
  if (result?.status === Status.FAILED) {
    const screenshotImage = await page.screenshot({
      path: `./test-result/screenshots/${pickle.name}`,
      type: 'png',
    })
    await this.attach(screenshotImage, 'image/png')
  }

  await page.close()
  await context.close()
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
