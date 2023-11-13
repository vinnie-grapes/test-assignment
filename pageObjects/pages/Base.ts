import { test, type Page } from "@fixtures";
import { NavBar } from "@components/NavBar";

export class Base {
  readonly navBar: NavBar;

  constructor(public page: Page) {
    this.page = page;
    this.navBar = new NavBar(page);
  }

  async navigatePage({ page = this.page, url }: { page?: Page; url: string }) {
    const baseURL = test.info().project.use.baseURL;
    const newUrl = new URL(url, baseURL).href;
    await page.goto(newUrl);
    await this.page.waitForLoadState("load");
  }
}
