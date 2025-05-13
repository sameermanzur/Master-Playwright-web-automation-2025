import { test, expect } from '@playwright/test';

// describe - Declaring a group of tests within a title using Parents. // Avoid grouping tests in another spec file. 
// describe.serial - declared group of tests runs serially, one by one mode; if one tests fails, all your consecutive tests are skipped. 
// runs in parallel. 

/* 
Database connection setup
clearing cookies  
Cache Removal
DataBase connection Disconnect
*/

test.describe.serial("Suite 1", () => { // contains all my hooks and test 1 and 2 
    test.beforeAll(async ({ browser }) => { //Browser for before All and After all. 
        console.log('Database connection setup');
    });

    test.beforeEach(async ({ page }) => {
        console.log('clearing cookies');
    });

    test.afterEach(async ({ page }) => {
        console.log('Cache Removal');
    });

    test.afterAll(async ({ browser }) => {
        console.log('DataBase connection Disconnect');
    });

    test('Test 1', async ({ page }) => {
        console.log('Test 1 Block');
    });

    test('Test 2', async ({ page }) => {
        console.log('Test 2 Block');
    });


});


test.describe("Suite 2", () => { // contains test 3 and 4 
   
    test('Test 3', async ({ page }) => {
        console.log('Test 3 Block');
    });

    test('Test 4', async ({ page }) => {
        console.log('Test 4 Block');
    });

    });





