import { test, expect } from '@playwright/test';

const credentialsData = [
    {
        'username': 'Admin',
        'password': 'admin123',
        'testcase': 'test1'
    },

    {
        'username': 'Admin0505',
        'password': '12345678',
        'testcase': 'test2'
    }
];

//forEach loop // it will pickup the data from the Array and runs 
// Backticks, and pass the data from the Array 

credentialsData.forEach(data => {
    test(`Orange HRM Login with Valid Credentials ${data.username} and ${data.password}`, async ({ page }) => { //${data.testcase}
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.pause(); 
        await page.locator('[name="username"]').fill(data.username);
        await page.locator('[type="password"]').fill(data.password);
        await page.locator('[type="submit"]').click();
        await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText("Dashboard"); 
        await page.locator('[class="oxd-userdropdown-name"]').click();
        await page.locator('[href="/web/index.php/auth/logout"]').click();
        await page.close();
    });
});









