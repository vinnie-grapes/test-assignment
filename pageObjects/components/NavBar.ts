import type { Page, Locator } from "@playwright/test";
import { expect } from "@playwright/test";
import { Base } from "../Base";

export class NavBar extends Base {
  readonly searchInput: Locator;

  constructor(public page: Page) {
    super(page);
    this.page = page;
    this.searchInput = page.getByRole("combobox", { name: "Search" });
  }

  async search(request: string) {
    await this.searchInput.fill(request);
    await this.searchInput.press("Enter");
    const searchResponse = this.page.waitForResponse(/.*[/search/videos?q=].*/);
    expect((await searchResponse).status()).toBe(200);
    await this.page.waitForLoadState("load");
  }
}
