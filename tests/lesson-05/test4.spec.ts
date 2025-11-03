import { test, expect } from '@playwright/test';
import { title } from 'process';

test('Search with existing mapping notes', async ({ page }) => {
    await test.step("Navigate to Personal notes page", async () => {
        await page.goto('https://material.playwrightvn.com');
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    });
    await test.step("Add 10 notes", async () => {
        const actions = [
            { actionName: 'click', description: 'Hàm click dùng để thực hiện click vào các phần tử trên trang web' },
            { actionName: 'fill', description: 'Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web' },
            { actionName: 'type', description: 'Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng' },
            { actionName: 'hover', description: 'Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover' },
            { actionName: 'check', description: 'Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked' },
            { actionName: 'uncheck', description: 'Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked' },
            { actionName: 'selectOption', description: 'Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown' },
            { actionName: 'press', description: 'Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác' },
            { actionName: 'dblclick', description: 'Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web' },
            { actionName: 'dragAndDrop', description: 'Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web' },
        ];
        for (let action of actions) {
            await page.locator("//input[@id= 'note-title']").fill(action.actionName);
            await page.locator("//textarea[@id= 'note-content']").fill(action.description);
            await page.locator("//button[@id= 'add-note']").click();
        }
    });
    await test.step("Search notes", async () => {
        await page.locator("//input[@id= 'search']").fill('một hoặc nhiều');
    });
});