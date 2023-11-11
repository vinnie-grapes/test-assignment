import { defineConfig, devices } from "@playwright/test";
import path from "path";

export const STORAGE_STATE = path.join(__dirname, "playwright/.auth/user.json");

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["line"], ["html"]],
  use: {
    trace: "on-first-retry",
    testIdAttribute: "id",
    baseURL: "https://faphouse.com",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    actionTimeout: 30 * 1000,
    navigationTimeout: 30 * 1000,
    ...devices["Desktop Chrome"],
  },

  projects: [
    {
      name: "setup",
      testMatch: "**/*.setup.ts",
    },
    {
      name: "basic",
      testMatch: "**/*.spec.ts",
      dependencies: ["setup"],
      timeout: 1 * 60 * 1000,
      retries: 1,
      use: {
        storageState: STORAGE_STATE,
      },
    },
  ],
});
