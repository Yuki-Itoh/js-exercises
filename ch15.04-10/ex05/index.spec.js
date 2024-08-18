import { test, expect } from "@playwright/test";

function gotoTestTarget(page) {
  return page.goto("index.html");
}

test.describe("category select", () => {
  test("", async ({ page }) => {
    await gotoTestTarget(page);
    const circle = await page.waitForSelector('[data-testid="customCircle"]');
    // const circle = await page.getByTestId("customCircle");
    circle.expect(circle).toHaveAttribute("color", "white");
    expect(circle).toHaveAttribute("border-color", "red");
  });
});
