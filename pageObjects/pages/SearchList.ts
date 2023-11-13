import { expect } from "@fixtures";
import { Base } from "@pages/Base";

export class SearchList extends Base {
  readonly videoElementLocator = ".grid>div[data-el-id]";

  async checkSearchTitle(request: string) {
    const searchTitle = request.toLowerCase();
    await expect(
      this.page.getByRole("heading", { name: searchTitle, exact: true }),
    ).toBeVisible();
  }

  async checkSearchResult(opts: { resultsCount: number }) {
    const menuLinks = await this.page.$$eval(
      this.videoElementLocator,
      (links) => links.map((link) => link.getAttribute("data-el-id")),
    );
    const uniqueMenuLinks = new Set(menuLinks);
    expect(uniqueMenuLinks.size, {
      message: "The number of video clips doesn't match the number specified",
    }).toBe(opts.resultsCount);
    expect(uniqueMenuLinks.size).toBe(menuLinks.length);
  }
}
