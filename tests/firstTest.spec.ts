import { test, expect}  from '@playwright/test';

test ( 'MyFirst Playwright test', async ({page}) => {
     await page.goto("https://demoqa.com/"); 
}); 


