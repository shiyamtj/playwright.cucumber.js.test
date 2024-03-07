const reporter = require('cucumber-html-reporter')

var date = new Date()
var currentDate =
  date.getDate() +
  '_' +
  (date.getMonth() + 1) +
  '_' +
  date.getFullYear() +
  '_' +
  date.getHours() +
  '_' +
  date.getMinutes() +
  '_' +
  date.getSeconds() +
  '_' +
  date.getMilliseconds()

var options = {
  brandTitle: 'demo test scenarios',
  theme: 'bootstrap',
  jsonFile: './test-result/test-results.json',
  output: './test-result/reports/cucumber_report_' + currentDate + '.html',
  screenshotsDirectory: './test-result/screenshots/',
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: false,
  failedSummaryReport: true,
  metadata: {
    'App Version': '1.1.1',
    'Test Environment': 'QA',
    Browser: process.env.BROWSER,
    Platform: 'Web/React',
    Sprint: 'Sprint 001',
  },
}

reporter.generate(options)
