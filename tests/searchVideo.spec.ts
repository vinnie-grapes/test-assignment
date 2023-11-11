import { test } from "@fixtures";

const DEFAULT_VIDEO_COUNT = 60;
const SEARCH_REQUEST = "Homemade";

test("Search for videos from the home page", async ({
  home,
  searchList,
}) => {
  await test.step("Open home page", async () => {
    await home.navigate();
  });

  await test.step("Search video", async () => {
    await home.navBar.search(SEARCH_REQUEST);
    await searchList.checkSearchTitle(SEARCH_REQUEST);
  });

  await test.step("Check correctness of search output", async () => {
    await searchList.checkSearchResult({ resultsCount: DEFAULT_VIDEO_COUNT });
  });
});
