import { test, expect } from '@playwright/test';

//Smoke - Must Pass, Software build functionality and stability. 
//Sanity- Integration, after new code changes. specific, detailed and more focused 
//Regression- Bigger level of smoke. After code changes. 

test('@smoke Test1', async ({page})=>{
    console.log('Block Test'); 
}); 

test('@sanity Test', async ({page})=>{
    console.log('est')

}); 

test('login 3 @smoke Test', async ({page})=>{
    console.log('Test 3')
});

test('login 3 @regression Test', async ({page})=>{
    console.log('Test 3')
});

