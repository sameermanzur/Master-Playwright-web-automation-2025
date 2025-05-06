import { test, expect } from '@playwright/test';
test("visible/Hidden Assertion", async ({ page }) => {
     await page.goto("https://www.letskodeit.com/practice");
     await page.pause(); 
     await expect(page.locator('#displayed-text')).toBeVisible();
     await page.locator('[name="show-hide"]').fill("Sameer");
     await page.locator('#hide-textbox').click();
     await expect(page.locator('#displayed-text')).toBeHidden();
     await page.locator('#displayed-text').click();
     await expect(page.locator('#displayed-text')).toBeVisible();
})


test("Present/Not Present Assertion", async ({ page }) => { 
     await page.goto("https://the-internet.herokuapp.com/");
     await page.locator('a[href="/add_remove_elements/"]').click();
     await page.pause();
     await expect(page.locator('[onclick="deleteElement()"]')).not.toHaveCount(1);
     await page.locator('[onclick="addElement()"]').click();
     await expect(page.locator('button[onclick="addElement()"]')).toHaveCount(1);
     await page.locator('[onclick="addElement()"]').click();
     await expect(page.locator('[onclick="deleteElement()"]')).toHaveCount(2);
})

test('Text Match/ Mismatch assertion', async ({page}) =>{
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     await page.locator('[name="username"]').fill("Admin");
     await page.locator('//input[@placeholder="Password"]').fill('admin123');
     await page.locator('[type="submit"]').click();
     await page.pause(); 
     await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toBeVisible(); 
     await expect(page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toHaveText('Dashboard'); 
     await page.locator('a[href="/web/index.php/performance/viewPerformanceModule"]').click();
     await expect(page.locator('.oxd-topbar-header-title')).toBeVisible();
     await expect(page.locator('.oxd-topbar-header-title')).not.toHaveText('Dashboard'); 
     
}); 

test("Element Attribute Assertion", async ({page}) => {
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
     await expect(page.locator('[name="username"]')).toHaveAttribute('placeholder', 'Username'); 
}); 

test("URL assertion", async ({page}) => {
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 

     //Full URL Assertion 
     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

     // Partial URL assertion  - Regular expressions regX 
     await expect(page).toHaveURL(/demo.orangehrmlive.com/); //

}); 

test('Title Assertion', async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
    await expect(page).toHaveTitle(/ange/); // Partial Title 
    expect(page).toHaveTitle('OrangeHRM'); //Full title 
})

test('Screenshot Assertion', async ({page}) =>{
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
     //visual regression  
     await page.locator('[name="username"]').fill("Admin"); 
     await page.locator('[name="Password"]').fill("admin123"); 
     await expect(page).toHaveScreenshot(); 
 })

test.only('Enabled/ Disabled', async  ({page})=>{
      // Example- Signup button before checking the agreeing terms- 
      await page.goto('https://letcode.in/button'); 
      await expect(page.locator('#home')).toBeEnabled();
     //  await expect(page.locator('[title="Disabled button"]')).not.toBeEnabled();
      await expect(page.locator('[title="Disabled button"]')).toBeDisabled(); 
}); 
 

