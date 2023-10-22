import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber'
import { pageFixture } from '../../support/pageFixture'
import { expect } from '@playwright/test'

setDefaultTimeout(60000)

Given('User launch OrangeHrm site', async () => {
  await pageFixture.page.goto(process.env.BASEURL)
  pageFixture.logger.info('Goto site successful')
})

When('User logs in with valid credentials on OrangeHrm', async () => {
  await pageFixture.page.locator("input[name='username']").fill('Admin')
  await pageFixture.page.locator("input[name='password']").fill('admin123')
  await pageFixture.page.getByRole('button', { name: /login/i }).click()
  await pageFixture.page.waitForTimeout(5000)
  pageFixture.logger.info('Login with credentials successful')
})

Then(
  'User should able to log into OrangeHrm dashboard successfully',
  async () => {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.page.getByRole('heading', { name: 'Dashboard', level: 6 })
    pageFixture.logger.info('OrangeHrm dashboard load successful')
  }
)

Then('User should able to see Dashboard text', async () => {
  const dashboardText = await pageFixture.page
    .locator('header.oxd-topbar h6')
    .textContent()
  expect(dashboardText).toBe('Dashboard1')
})
