import * as dotenv from 'dotenv'

export const getEnv = () => {
  if (process.env.ENV) {
    dotenv.config({
      override: true,
      path: `./support/env/.env.${process.env.ENV}`,
    })
  } else {
    console.error('NO ENV PASSED!')
  }
}
