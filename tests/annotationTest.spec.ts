import { test, expect } from '@playwright/test';


// Skipped Completely, never executed. 
 test.skip('Skipped Test', async ({ page }) => {
        console.log('Test 3 Block');
    });

// Conditionally skipping the test only when browser is Safari (webkit). 
test('Skip Test in  Safari', async ({ page, browserName }) => {
    test.skip(browserName == 'webkit', 'This feature is not implemented in Safari');
        console.log('Test 3 Block');
    });

// Marks the test as 'expected to fail' regardless of browser.
// will show test as XFAIL in test report. 
// 
test.fail('Not Yet Ready', async ({page})=> {
    // Indicates this test is under development or  known to fail. 
     console.log('Test 3 Block');
}); 

  // Conditionally mark test as "expected to fail" only on WebKit (Safari).
test('fail in WebKit', async ({ page, browserName }) => {
    test.fail(browserName === 'webkit', 'This feature is not implemented for Mac yet');
  });

// Skips the test with a "FIXME" flag indicating it needs to be fixed unlike the skip test. 
test.fixme('Yet to fix the test', async () => {
    // This will be highlighted in reports as something you need to fix later.
  });

// Marks this test as slow, increasing the timeout (typically 3x default timeout).
test('slow test', async ({ page }) => {
    test.slow(); // Useful if this test is known to take longer.Default Value = 90 S 
    // Add slow-running test code here.
  });

// Conditionally mark as slow only when running on WebKit (Safari).
test('slow in WebKit', async ({ page, browserName }) => {
    test.slow(browserName === 'webkit', 'This feature is slow on Mac');
    // Add test code here
  });















