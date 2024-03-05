import { Page } from '@playwright/test'
import PlaywrightWrapper from '../../support/wrapper/PlaywrightWrapper'
import AssertWrapper from '../../support/wrapper/AssertWrapper'
import { pageFixture } from '../../support/pageFixture'

export default class LoginPage {
  private base: PlaywrightWrapper
  private assert: AssertWrapper

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page)
    this.assert = new AssertWrapper(page)
  }

  private Elements = {
    usernameInput: 'input[name="user-name"]',
    passwordInput: 'input[name="password"]',
    loginButton: 'input#login-button',
  }

  async loadLoginPage() {
    await this.base.goto(process.env.BASEURL)
    await this.assert.assertTitle('Swag Labs')
    pageFixture.logger.info('Goto Swag Labs site successful')
  }

  async enterUserName(user: string) {
    await this.base.waitAndFill(this.Elements.usernameInput, user)
    pageFixture.logger.info(`enterUserName with value ${user}`)
  }

  async enterPassword(password: string) {
    await this.base.waitAndFill(this.Elements.passwordInput, password)
    pageFixture.logger.info(`enterPassword with value ${password}`)
  }

  async clickLoginButton() {
    await this.base.waitAndClick(this.Elements.loginButton)
    pageFixture.logger.info(`clickLoginButton`)
  }

  async loginUser(user: string, password: string) {
    await this.enterUserName(user)
    await this.enterPassword(password)
    await this.clickLoginButton()
    await this.page.waitForTimeout(5000)
    pageFixture.logger.info('Login with credentials successful')
  }

  async getErrorMessage() {
    return await this.page.locator('h3[data-test="error"').innerText
  }
}
