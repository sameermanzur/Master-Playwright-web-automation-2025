// Alert is not pop up. Why we need alert- warning message; handle errors or confirmation in critical applications. 
// By default Playwright & Cypress handle alerts. without the need for test execution, but in Selenium test can not be proceeded without passing alerts. 
// But Why we need? 1. Options to choose different options. 2. verify the alert message for testing. 

import { test, expect } from '@playwright/test';

test("Simple Alert Test", async ({ page }) => {
    await page.goto('https://letcode.in/alert');
    await page.pause();
    page.on('dialog', async (alert) => { // Alert, and Alert messages. 
        const alertMessage = alert.message();
        expect(alertMessage).toEqual("Hey! Welcome to LetCode");
        await alert.accept();// bcoz it is async so add await 
    })
    await page.locator('#accept').click(); // it is to the alert needs to be closed or not. 
    await page.pause();
    // Event listeners (on) (actions)- it will disconnect connect between me and the browser - Use DOM to handle the alerts 
    // Knowledge--> Action--> to handle alerts 
});

test('Confirmation Ok Alert Test', async ({ page }) => {
    await page.goto('https://letcode.in/alert'); 
    page.on('dialog', async(alert) =>{
       const alertMessage = alert.message();
        expect(alertMessage).toEqual('Are you happy with LetCode?'); 
        await alert.accept();
    })
    await page.pause(); 
    await page.locator('#confirm').click();
});

test('Confirmation Cancel Alert Test', async ({ page }) => {
    await page.goto('https://letcode.in/alert'); 
    page.on('dialog', async(alert) =>{
       const alertMessage = alert.message();
        expect(alertMessage).toEqual('Are you happy with LetCode?'); 
        await alert.dismiss();
    })
    await page.locator('#confirm').click();
    await page.pause();
});

test.only ('Confirmation Cancel with Result Alert Test', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts'); 
    await page.pause(); 
    page.on('dialog', async(alert) =>{
       const alertMessage =  alert.message();
       expect(alertMessage).toEqual('I am a JS Confirm');
       await alert.dismiss(); 
      
    })
    await page.locator('button[onclick="jsConfirm()"]').click();
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel'); 

}); 

test('Prompt Alert Test', async ({ page }) => {
    await page.goto('https://letcode.in/alert'); 
    page.on('dialog', async(alert) =>{
       const alertMessage = alert.message();
        expect(alertMessage).toEqual('Enter your name'); 
        await alert.accept('Sameer')
    })
    await page.locator('#prompt').click();
    await page.pause();
});

test('Dismiss Prompt Alert Test', async ({ page }) => {
    await page.goto('https://letcode.in/alert'); 
    await page.pause();
    page.on('dialog', async(alert) =>{
       const alertMessage = alert.message();
        expect(alertMessage).toEqual('Enter your name'); 
        await alert.dismiss(); 
    })
    await page.locator('#prompt').click();
    await page.pause();
});

test('Modern Prompt Alert Test', async ({ page }) => {
    await page.goto('https://letcode.in/alert');
    await page.pause();
    await page.locator('#modern').click();
    await expect(page.locator('[class="title"]')).toHaveText('Modern Alert - Some people address me as sweet alert as well ');
    await page.locator('[class="modal-close is-large"]').click();
});

