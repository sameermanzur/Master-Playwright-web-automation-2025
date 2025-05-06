import { test, expect}  from '@playwright/test';

test("My First Playwright Test", async({page})=>{
     await page.goto("https://demoqa.com/"); 
})

