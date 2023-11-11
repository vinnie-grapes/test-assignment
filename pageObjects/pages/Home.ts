import type { Page } from "@playwright/test";
import { Base } from "../Base";
import { NavBar } from "@components/NavBar";

export class Home extends Base {
  readonly navBar: NavBar;

  constructor(public page: Page) {
    super(page);
    this.page = page;
    this.navBar = new NavBar(page);
  }

  async navigate() {
    await this.navigatePage({ url: "/" });
  }
}
