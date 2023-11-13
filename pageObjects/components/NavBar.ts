import { expect } from "@playwright/test";
import { BaseComponent } from "@components/BaseComponent";

export class NavBar extends BaseComponent {
  readonly searchInputLocator = this.page.getByRole("combobox", {
    name: "Search",
  });
  readonly searchResponse = this.page.waitForResponse(
    /.*[/search/videos?q=].*/,
  );

  async search(request: string) {
    await this.searchInputLocator.fill(request);
    await this.searchInputLocator.press("Enter");
    expect((await this.searchResponse).status()).toBe(200);
    await this.page.waitForLoadState("load");
  }
}
