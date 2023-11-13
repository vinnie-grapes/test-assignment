import type { Page } from "@playwright/test";

export class BaseComponent {
  constructor(public page: Page) {
    this.page = page;
  }
}
