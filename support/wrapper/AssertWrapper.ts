import { Page, expect } from '@playwright/test'

export default class AssertWrapper {
  constructor(private page: Page) {}

  async assertTitle(title: string) {
    await expect(this.page).toHaveTitle(title)
  }

  async assertTitleContains(title: string) {
    const pageTitle = await this.page.title()
    expect(pageTitle).toContain(title)
  }

  async assertURL(url: string) {
    await expect(this.page).toHaveURL(url)
  }

  async assertURLContains(title: string) {
    const pageURL = this.page.url()
    expect(pageURL).toContain(title)
  }
}
