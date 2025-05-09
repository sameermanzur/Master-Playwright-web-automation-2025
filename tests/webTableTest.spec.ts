// Web Tables- Rows and Columns 
// In web No names for columns; only way to navigate is to through rows. 
// Table Tags- tr-Table Row, td-Table Data th-Table Header 
 
import { test, expect} from '@playwright/test'; 

test('Handling Web Table Test', async ({page}) =>{
    await page.goto('https://letcode.in/table');
    const table = page.locator('#simpletable');

    // total rows and columns 
    // find Rows from the Body 

    const columns = table.locator('thead th');
    const columnCounts= await columns.count();
    console.log(columnCounts); 
   

    const rows = table.locator('tbody tr');
    const rowsCounts = await rows.count(); 
    console.log(rowsCounts); 
});

test('Select Single checkbox Handling Web Table Test', async ({page}) =>{
    await page.goto('https://letcode.in/table');
    const table = page.locator('#simpletable');
    const rows = table.locator('tbody tr');
    const columns = table.locator('thead')

    const matchedRows =  rows.filter({
        has: page.locator('td'),
        hasText: 'Yashwanth'
    }); 

    await matchedRows.locator('input').check(); 
    await page.pause();
});

//Pagination Table Handling 
test('Select Single Check Box Test', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const rows = table.locator('tbody tr'); // understand the route of moving from parent to child in the DOM 
    const columns =table.locator('thead tr th'); 

    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: 'Wireless Earbuds'
    })
    await matchedRows.locator('[type="checkbox"]').click();
    await page.pause();
}); 

//Sorting Table 

test('Sorting Table Test', async ({ page }) => {
   
});