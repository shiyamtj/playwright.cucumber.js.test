import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber'
import { pageFixture } from '../../support/pageFixture'
import { expect } from '@playwright/test'

setDefaultTimeout(10000)

Given('User launch OrangeHrm site', async () => {
  await pageFixture.page.goto(process.env.BASEURL)
})

When('User logs in with valid credentials on OrangeHrm', async () => {
  await pageFixture.page.locator("input[name='username']").fill('Admin')
  await pageFixture.page.locator("input[name='password']").fill('admin123')
  await pageFixture.page.getByRole('button', { name: /login/i }).click()
  await pageFixture.page.waitForTimeout(5000)
})

Then(
  'User should able to log into OrangeHrm dashboard successfully',
  async () => {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.page.getByRole('heading', { name: 'Dashboard', level: 6 })
  }
)

Then('User should able to see Dashboard text', async () => {
  const dashboardText = await pageFixture.page
    .locator('header.oxd-topbar h6')
    .textContent()
  expect(dashboardText).toBe('Dashboard1')
})
