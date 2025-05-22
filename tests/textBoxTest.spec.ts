import { test, expect} from '@playwright/test';
import { Severity, label, step} from 'allure-js-commons';

test('Fill Method Test', async ({ page }) => {
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      await page.locator('[name="username"]').fill('Admin');
      await page.locator('//input[@placeholder="Password"]').fill('123');
      await page.locator('[name="password"]').press('Enter'); //Keys- Read method for different use case 
      await page.pause();
   }); 

test('Press Sequential Method test', async ({page}) =>{
   // Why sequential? - press keys sequentially==> enter each keys individually 
   // Real Time use case- behave like entering by real user 
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   await page.locator('[name="username"]').pressSequentially('Admin');
   await page.locator('//input[@placeholder="Password"]').pressSequentially('admin123'); 
   await page.locator('[type="submit"]').click();
   await expect(page.locator('[class="oxd-topbar-header-title"]')).toHaveText('Dashboard'); 
   await page.pause(); 
}); 

test('Press Sequential Method with Delay test', async ({page}) =>{
   // Delay is to fill informations; the method only works when you pair the sequentially with delay. 
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   await page.pause(); 
   await page.locator('[name="username"]').pressSequentially('Admin',{delay:3000}); //in JS/TS 3000 is Milli seconds / by 1000 
   await page.locator('//input[@placeholder="Password"]').pressSequentially('admin123', {delay:1000}); 
   await page.pause(); 
}); 


