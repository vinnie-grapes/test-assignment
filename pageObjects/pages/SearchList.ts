import { Page, expect } from "@playwright/test";
import { Base } from "../Base";
import { NavBar } from "@components/NavBar";

export class SearchList extends Base {
  readonly navBar: NavBar;

  constructor(public page: Page) {
    super(page);
    this.page = page;
    this.navBar = new NavBar(page);
  }

  async checkSearchTitle(request: string) {
    const searchTitle = request.toLowerCase();
    await expect(
      this.page.getByRole("heading", { name: searchTitle, exact: true }),
    ).toBeVisible();
  }

  async checkSearchResult(opts: { resultsCount: number }) {
    const menuLinks = await this.page.$$eval(".grid>div[data-el-id]", (links) =>
      links.map((link) => link.getAttribute("data-el-id")),
    );
    const uniqueMenuLinks = new Set(menuLinks);
    expect(uniqueMenuLinks.size, {
      message: "The number of video clips doesn't match the number specified",
    }).toBe(opts.resultsCount);
    expect(uniqueMenuLinks.size).toBe(menuLinks.length);
  }
}
