// Single windows 
// PW can only have control over parent page. so pass the control to the new tab. 
// Single Tab, Single windows 
// multiple Tab, Multiple windows 
// Event listeners approach, inform the event before the action happens using DOM Method. 

import { test, expect} from '@playwright/test'; 

test('Single Tab Handling Test ', async ({page}) =>{
    await page.goto('https://letcode.in/window');
    await page.pause(); 
    // Promise all- execute only after meeting all the conditions to be true. 
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'), // for PW the new tabs are PopUps. 
        await page.click('button:has-text("Open Home Page")')
    ]); 
    await page.pause(); 
    // from now it is newTab.locator 
    await newTab.waitForLoadState('domcontentloaded'); // To stop API interaction until the DOM is ready to access and manipulate page elements. 
    await newTab.locator("//a[normalize-space()= 'Grooming']").click();
    await newTab.locator('a[href="/interview"]').click();
    await newTab.close(); 
    await page.pause(); 
});

test('Single Window Handling Test', async ({page}) =>{
    await page.goto('https://demo.automationtesting.in/Windows.html'); 
    await page.locator('a[href="#Seperate"]').click(); // add this step; rest of the method remains same 

    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'), // for PW the new tabs are PopUps. 
        await page.click('button[onclick="newwindow()"]')
    ]); 
    await page.pause(); 
    // from now it is newTab.locator 
    await newWindow.waitForLoadState('domcontentloaded'); // To stop API interaction until the DOM is ready to access and manipulate page elements. 
    await newWindow.locator('a[href="/documentation"]').click();
    await newWindow.close(); 
    await page.pause(); 
}); 

test('Multiple Tab Openings Test', async ({page}) =>{
    await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html'); 
    await page.pause(); 

    const [multipleTab] = await Promise.all([
        page.waitForEvent('popup'), 
        await page.click('#newTabsBtn')
    ]); 

    await multipleTab.waitForLoadState('networkidle');
    // I need 2 pages, so the method is 
    const pages = multipleTab.context().pages(); 
    await pages[1].bringToFront(); 
    await pages[1].locator('#firstName').fill('Sameer'); 
    await pages[2].bringToFront(); 
    await pages[2].locator('#alertBox').click();
}); 

test('Multiple Windows opening Test', async ({page}) =>{
    await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html'); 

    // Setup a listener before clicking the link 
    const [Popups] = await Promise.all([
        page.waitForEvent('popup'), 
        await page.click('#newWindowsBtn')
    ]); 

    // wait for all windows to load 
    await Popups.waitForLoadState('domcontentloaded'); 
    const pages = Popups.context().pages();

    // I am trigerring to open 2 windows 
    await page.pause(); 
    await pages[1].bringToFront();
    await pages[1].locator('#firstName').fill('Sameer');
    await pages[1].close(); // to avoid if there are any similar locators to exist. 
    await page.pause(); 
    const table = pages[2].locator('#contactList');
    const rows = table.locator('tbody th');
    const column = table.locator('tr td')

    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: 'Maria Anders'

    })
    await matchedRows.locator('//tbody/tr[2]/td[1]/input[1]').check(); 
    await page.pause();
}); 
