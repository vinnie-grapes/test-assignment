import { type Page } from "@playwright/test";
import { test } from "@fixtures";

export class Base {
  constructor(public page: Page) {
    this.page = page;
  }

  async navigatePage({ page = this.page, url }: { page?: Page; url: string }) {
    const baseURL = test.info().project.use.baseURL;
    const newUrl = new URL(url, baseURL).href;
    await page.goto(newUrl);
    await this.page.waitForLoadState("load");
  }
}
