import { test, expect } from "@playwright/test";

function gotoTestTarget(page) {
  return page.goto("index.html");
}

function getSelectedCategory(page) {
  return page.getByTestId("select");
}

function getProductList(page) {
  return page.getByTestId("productList");
}

test.describe("category select", () => {
  test("", async ({ page }) => {
    await gotoTestTarget(page);
    await getSelectedCategory(page).click();
    await expect(getSelectedCategory(page)).toBeFocused();
  });
});
