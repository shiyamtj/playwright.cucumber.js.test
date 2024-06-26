import * as dotenv from 'dotenv'
import * as os from 'os'

export const getEnv = () => {
  if (process.env.ENV) {
    dotenv.config({
      override: false,
      path: `./support/env/.env.${process.env.ENV.toLowerCase()}`,
    })
  } else {
    console.error('NO ENV PASSED!')
  }
}

export const setEnv = () => {
  process.env.DEVICE = os.hostname()
  process.env.PLATFORM = os.platform()
  process.env.PLATFORM_VERSION = os.release()
}
