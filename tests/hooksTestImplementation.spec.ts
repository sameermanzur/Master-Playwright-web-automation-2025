import { test, expect } from '@playwright/test';

test.beforeEach('Orange HRM Login', async ({page}) =>{
    // Before each- Executes code before each test within a group. // navigating to a specific URL or login page. 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[name="password"]').fill('admin123');
    await page.locator('[type="submit"]').click(); 
    await expect(page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toHaveText('Dashboard'); 
}); 

test.afterEach('Orange HRM Logout', async ({page}) =>{
    await page.locator('[class="oxd-userdropdown-name"]').click();
    await page.locator('[href="/web/index.php/auth/logout"]').click(); 
    await page.close(); 
}); 

test.only('Orange HRM Login Leave Page', async ({page}) =>{
    // Before each- Executes code before each test within a group. // navigating to a specific URL or login page. ; 
    await page.pause(); 
    await page.locator("//span[normalize-space()='Leave']").click(); 
    const checkbox = page.locator('[class="oxd-icon bi-check oxd-checkbox-input-icon"]');
    expect (checkbox).not.toBeChecked(); 
    await checkbox.check();
    expect(await checkbox.isChecked()).toBeTruthy();  
    await checkbox.uncheck(); 
  
    await page.pause(); 
}); 

test('Orange HRM PIM', async ({page}) =>{
    await page.locator("//span[normalize-space()='PIM']").click();
    await page.pause(); 
}); 

