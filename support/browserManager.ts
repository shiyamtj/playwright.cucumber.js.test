import { LaunchOptions, chromium, firefox, webkit } from '@playwright/test'

const options: LaunchOptions = {}

export const InvokeBrowser = () => {
  const browserType = process.env.BROWSER
  options.headless = process.env.HEAD === 'true'
  console.log(`Browser initiated as ${browserType}`)
  switch (browserType) {
    case 'chrome':
      return chromium.launch(options)

    case 'firefox':
      return firefox.launch(options)

    case 'webkit':
      return webkit.launch(options)

    default:
      throw new Error('Please set browser properly.')
  }
}
