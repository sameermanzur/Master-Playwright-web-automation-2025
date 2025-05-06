// Select multiple instances
import { test, expect } from '@playwright/test';

test('Check Box Test', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    const cricketCheckBox = page.locator('#checkbox1');
    const moviesCheckBox = page.locator('#checkbox2');
    const hockeyCheckBox = page.locator('#checkbox3');
     

    // Default state is all Unchecked 
    expect(cricketCheckBox).not.toBeChecked();
    expect(moviesCheckBox).not.toBeChecked();
    expect(hockeyCheckBox).not.toBeChecked();

    // select Cricket and Hockey 
    await cricketCheckBox.check(); 
    await hockeyCheckBox.check(); 
    expect(await cricketCheckBox.isChecked()).toBeTruthy(); 
    expect(await moviesCheckBox.isChecked()).toBeFalsy();
    expect(await hockeyCheckBox.isChecked()).toBe(true); 

    await cricketCheckBox.uncheck(); //uncheck again 
    await page.pause();
    expect(await cricketCheckBox.isChecked()).toBeFalsy();
}); 

