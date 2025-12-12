const { test, expect } = require("@playwright/test");

test.describe("Homepage", () => {
  test("hero content renders and contact link works", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Helmani/i);
    await expect(page.getByRole("heading", { name: "Healthy Food, Healthy Life" })).toBeVisible();

    const heroContactButton = page.locator(".hero").getByRole("link", { name: "Contact Us" });
    await expect(heroContactButton).toBeVisible();

    await heroContactButton.click();
    await expect(page).toHaveURL(/contact/);
    await expect(page.getByRole("heading", { name: "Contact Me" })).toBeVisible();
  });
});
