// Objects- can be defined in any combinations. 
// Json is native to Typescript, does n't require ant dependencies or lines of code to run. 

import { test, expect} from '@playwright/test'; 
import {faker} from '@faker-js/faker'; 

import * as orangeHrmData from './testsData/orangeHrmLoginCredentials.json' //aliasing followed by Parent Name 

test('Login Test with Valid Credentials', async ({page})=> {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); 
    await page.locator('[name="username"]').fill(orangeHrmData.validUsername); 
    await page.locator('//input[@placeholder="Password"]').fill(orangeHrmData.validPassword);
    await page.locator('[type="submit"]').click();
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toBeVisible(); 
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText("Dashboard"); 
    await page.pause (); 
}); 

test('Login Test with invalid Credentials', async ({page})=> {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); 
     await page.locator('[name="username"]').fill(orangeHrmData.invalidUsername); 
    await page.locator('//input[@placeholder="Password"]').fill(orangeHrmData.invalidPassword);
    await page.locator('[type="submit"]').click();
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toBeVisible(); 
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText("Dashboard"); 
    await page.pause (); 
}); 

const randomUserName = faker.internet.username();
const randomPassword = faker.internet.password(); 

test ('Login Test with invalid Faker Credentials', async ({page})=> {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); 
     await page.locator('[name="username"]').fill(randomUserName); 
    await page.locator('//input[@placeholder="Password"]').fill(randomPassword);
    await page.locator('[type="submit"]').click(); 
    await expect(page.locator('[class="oxd-alert-content oxd-alert-content--error"]')).toHaveText("Invalid credentials"); 
    await page.pause (); 
}); 


