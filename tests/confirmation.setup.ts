import { test as setup } from "@fixtures";
import { STORAGE_STATE } from "../playwright.config";

setup("Age сonfirmation", async ({ page, home }) => {
  await home.navigate();
  await page.getByTestId("yes-im-over-18").click();
  await page.context().storageState({ path: STORAGE_STATE });
});
