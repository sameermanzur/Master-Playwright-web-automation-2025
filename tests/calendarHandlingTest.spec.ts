
import { test, expect } from '@playwright/test';
import { DateTime } from 'luxon';


test("Simple Date Picker Test", async ({ page }) => {
    await page.goto('https://letcode.in/calendar');
    await page.pause();
    await page.locator('#birthday').pressSequentially('09/06/1995', {delay:2000}); 
    await page.pause(); 

});

test("Date Picker Using Luxon Test", async ({ page }) => {
    await page.goto('https://ng-bootstrap.github.io/#/components/datepicker/examples#popup');
    await page.pause();
    await page.locator('#start_date').click();

});




/*
MM- short form for month
MMM- Full form for month 
YY- short form for Year 
YYYY - Full form for the year. 
Write a function to check the date until I need 
while 
*/

