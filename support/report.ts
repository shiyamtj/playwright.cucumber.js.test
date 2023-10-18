import { getEnv } from './env/env'

const report = require('multiple-cucumber-html-reporter')

getEnv()

report.generate({
  jsonDir: './test-result/',
  reportPath: './cucumber-report/',
  reportName: 'Playwright Automation Report',
  pageTitle: 'Test Report Page Title',
  displayDuration: true,
  durationInMS: false,
  displayReportTime: true,
  metadata: {
    browser: {
      name: process.env.BROWSER,
      // version: '60',
    },
    device: process.env.DEVICE,
    platform: {
      name: process.env.PLATFORM,
      // version: '16.04',
    },
  },
  // customData: {
  //   title: 'Run info',
  //   data: [
  //     { label: 'Project', value: 'Custom project' },
  //     { label: 'Release', value: '1.2.3' },
  //     { label: 'Cycle', value: 'B11221.34321' },
  //     { label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST' },
  //     { label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST' },
  //   ],
  // },
})
