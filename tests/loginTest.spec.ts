import { test, expect } from '@playwright/test';
test("Demo QA Login Test", async ({ page }) => {
    await page.goto("https://demoqa.com/login");
    await page.locator('#userName').fill("sameer0906");
    await page.locator('[type="password"]').fill('@Jenkins0906');
    page.pause
    await page.locator('#login').click();
})

