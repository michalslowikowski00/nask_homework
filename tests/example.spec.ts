import { test, expect } from "@playwright/test";
import { url } from "inspector";

const urlLocalHost = "https://playwright.dev/";

test.describe("Website", async () => {
  test("should has title", async ({ page }) => {
    await page.goto(urlLocalHost);
    await expect(page).toHaveTitle(/Playwright/);
    page.close();
  });
});
