import { test, expect} from '@playwright/test'; 

test('Fill Method Test', async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123'); 
    await page.locator('[type="submit"]').click(); 
    
}); 
       