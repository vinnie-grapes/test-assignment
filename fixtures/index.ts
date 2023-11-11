import { test as base, expect } from "@playwright/test";
import { Home } from "@pages/Home";
import { SearchList } from "@pages/SearchList";

type webFixtures = {
  home: Home;
  searchList: SearchList;
};

export const test = base.extend<webFixtures>({
  searchList: async ({ page }, use) => {
    await use(new SearchList(page));
  },
  home: async ({ page }, use) => {
    await use(new Home(page));
  },
  page: async ({ page }, use) => {
    await use(page);
    await page.close();
  },
});

export { expect };
