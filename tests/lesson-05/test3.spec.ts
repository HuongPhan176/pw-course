import { test, expect } from '@playwright/test';

test('Delete multiple todo tasks', async ({ page }) => {
    await test.step("Navigate to Todo page", async () => {
        await page.goto('https://material.playwrightvn.com');
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    });
    await test.step("Add 100 todo item with content as Todo <i>", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });
    await test.step("Delete the todo tasks in the odd-numbered rows", async () => {
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 99; i >= 1; i-=2) {
            await page.locator(`(//button[text()= "Delete"])[${i}]`).click();
        }
    });
});