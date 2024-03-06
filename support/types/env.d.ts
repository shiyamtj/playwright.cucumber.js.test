export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BROWSER: 'chrome' | 'firefox' | 'webkit'
      ENV: 'test' | 'ci'
      BASEURL: string
      HEAD: 'true' | 'false'
      PLATFORM: string
      PLATFORM_VERSION: string
      DEVICE: string
      VIDEO: 'true' | 'false'
    }
  }
}
