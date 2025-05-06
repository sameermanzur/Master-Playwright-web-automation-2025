import { test, expect } from '@playwright/test'; 

    test('Regular Single Left Click Test', async ({page}) => {
        await page.goto('https://play1.automationcamp.ir/mouse_events.html');
        await page.pause();
        await page.locator('#click_area').click(); // Although it is 1 of 2, the 2nd is the Java Script document added in the DOM not the element; to do some other operations. 
        await expect(page.locator('#click_type')).toHaveText('Click');   
    }); 

    test('Right Click or Context Click Test', async ({page}) => {
        await page.goto('https://play1.automationcamp.ir/mouse_events.html');
        await page.pause();
        await page.locator('#click_area').click({button:"right", clickCount:2, delay:1000, position:{x: 453, y:25}}); // read the method 
        await expect(page.locator('#click_type')).toHaveText('Right-Click');   
    }); 


