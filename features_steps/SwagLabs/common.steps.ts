import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber'
import { pageFixture } from '../../support/pageFixture'
import { expect } from '@playwright/test'
import LoginPage from '../../pages/SwagLabs/loginPage'

let loginPage: LoginPage
setDefaultTimeout(60000)

Given('User launch Swag Labs site', async () => {
  loginPage = new LoginPage(pageFixture.page)
  await loginPage.loadLoginPage()
})

When('User logs in with valid credentials on Swag Labs', async () => {
  await loginPage.loginUser('standard_user', 'secret_sauce')
})

Then(
  'User should able to log into OrangeHrm dashboard successfully',
  async () => {
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
