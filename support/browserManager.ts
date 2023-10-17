import { LaunchOptions, chromium, firefox, webkit } from '@playwright/test'

const options: LaunchOptions = {
  headless: process.env.HEAD,
  // slowMo: 500,
}

export const InvokeBrowser = () => {
  const browserType = process.env.BROWSER

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
