import { test, expect } from '@playwright/test';

test('Register success', async ({ page }) => {
    await test.step("Navigate to register page", async () => {
        await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
    });
    await test.step("Input valid data for all fields", async () => {
        await page.locator("//input[@id = 'username']").fill("Jay Phan");
        await page.locator("//input[@id = 'email']").pressSequentially('jayphanvn@gmail.com', {
            delay: 100
        });
        let isChecked = page.locator("//input[@id = 'female']").isChecked();
        if (!isChecked) {
            await page.locator("//input[@id = 'female']").check();
        };
        await page.locator("//input[@id = 'reading']").check();
        await page.locator("//input[@id = 'traveling']").setChecked(true);
        await page.locator("//select[@id = 'interests']").selectOption(['science', 'music', 'sports']);
        await page.locator("//select[@id = 'country']").selectOption('canada');
        await page.locator("//input[@id = 'dob']").fill("1995-06-17");
        await page.locator("//input[@id = 'profile']").setInputFiles("chibi-avatar.jpg");
        await page.locator("//textarea[@id = 'bio']").fill("Quality engineer with 3-years experience");
        await page.locator("//input[@id = 'rating']").fill('8');
        await page.locator("//input[@id = 'favcolor']").fill('#e5b8e4');
        await page.locator("//input[@id = 'newsletter']").check();
        await page.locator("//label[@class='switch']/span[@class='slider round']").check();
        const box = await page.locator("//div[@id='starRating']").boundingBox();
        if (box) {
            await page.mouse.click(box.x + box.width * 0.9, box.y + box.height / 2);
        }
    });
    await test.step("Click register button", async () => {
        await page.locator("//button[@type = 'submit']").click();
    });
});