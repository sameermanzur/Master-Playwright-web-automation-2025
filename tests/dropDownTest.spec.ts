// Dropdown-have list of options to choose from the menu 
//Drop down split into ; Static--> single, Multi. Dynamic-->Searchable, non searchable 
// Dom will have 'select' as default type for static drop down 
import { test, expect, selectors } from '@playwright/test';

test('Static Drop Down Test', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.pause();
    await page.selectOption('#Skills', "Certifications");// String  {label:'Certifications'}
    await page.selectOption('#Skills', { value: 'C++' });
    await page.selectOption('#Skills', { index: 19 }); //CSS 
});

test('Multi Static Drop Test', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('#multi-select', [
        { value: 'Texas' },
        { index: 8 },
    ]);

    //Arrays (multilple objects)
});

test('Searchable Dynamic Drop Down Test', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html'); // Value is dynamically generated in real time // Ul- unordered list li-list --> li tag come from ul
    // 2 methods 
    await page.locator('[role="combobox"]').click();
    await page.locator('[type="search"]').fill('India');
    // Parent to child--> for CSS #select2-country-results>li
    await page.locator('#select2-country-results>li').click();
});

test('Non-Searchable Dynamic Drop Down Test', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html'); // Value is dynamically generated in real time // Ul- unordered list li-list --> li tag come from ul
    // 2 methods 
    await page.locator('[role="combobox"]').click();
    // await page.locator('[type="search"]').fill('India'); 
    // Parent to child--> for CSS #select2-country-results>li
    await page.locator('#select2-country-results').locator('li', { hasText: "India" }).click();
}); 

test ('Mutiple Drop Down check list', async ({page}) =>{
    await page.goto('https://demoqa.com/automation-practice-form');
}); 

