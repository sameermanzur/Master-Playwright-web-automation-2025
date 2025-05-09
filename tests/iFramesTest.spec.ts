import { test, expect } from '@playwright/test';
// Demonstrates interacting with iframes using Playwright
// I frames- inline Frames- embed HTML document with another one. 
// move parent frame to control frame 

test('iFrame Handling using page.frame()', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
  const frame1 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'}); 
  await frame1?.locator('[name="mytext1"]').fill('Sameer'); 
  await page.pause(); 
    // Remove page.pause() for automation, but you can uncomment for debugging
    // await page.pause();
});


test('iFrame Handling using page.frameLocator()', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame1 = page.frameLocator('frame[src="frame_1.html"]'); 
    await frame1.locator('[name="mytext1"]').fill('Sameer'); 
    await page.pause(); 
    // Remove page.pause() for automation, but you can uncomment for debugging
    // await page.pause();
});

test ('Nested Frame Handling Test', async ({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/'); 

    const frame3 = page.frame ({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'});
    const childFrames =  frame3?.childFrames(); //Child frames will return in array 
     await childFrames[0].locator('[data-value="Hi, I am the UI.Vision IDE"]').check(); 
});

// test ('Nested Frame Handling Test by page.frameLocator', async ({page}) =>{
//     await page.goto('https://ui.vision/demo/webtest/frames/'); 

//     const frame3 = page.frameLocator('frame[src="frame_3.html"]'); 
//     const childFrames =  frame3?.childFrames(); //Child frames will return in array 
//     await childFrames[0].locator('[data-value="Hi, I am the UI.Vision IDE"]').check();
//     await page.pause(); 
//     // Test has failed due to bug 
//     // works only using url method for now 
// });