import { test, expect } from '@playwright/test';

test('Add to cart all products success', async ({ page }) => {
    await test.step("Navigate to product page", async () => {
        await page.goto('https://material.playwrightvn.com');
        await page.locator("//a[@href='02-xpath-product-page.html']").click();
    });
    await test.step("Add to cart 2 items of product 1", async () => {
        await page.locator("(//button[@class='add-to-cart'])[1]").dblclick();
    });
    await test.step("Add to cart 3 items product 2", async () => {
        await page.locator("//button[@data-product-id='2']").click();
        await page.locator("//button[@data-product-id='2']").dblclick();
        //option 2: use for loop
        //for (let i = 1; i <= 3; i++) await page.locator("//button[@data-product-id='2']").click();
    });
    await test.step("Add to cart 1 items of product 3", async () => {
        await page.locator("//button[@data-product-id='3']").click();
    });
});