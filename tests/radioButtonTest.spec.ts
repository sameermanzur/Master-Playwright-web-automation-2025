// select only one - round 
import { test, expect} from '@playwright/test';

 test ('Radio Button Test', async ({page}) =>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    // visually can be checked at DOM by looking at the attribute 'type= radio' 
    const maleRadioButton = page.locator('[value="Male"]'); 
    const femaleRadioButton = page.locator('[value="FeMale"]'); 
    await page.pause(); 

    // Default state - Method 1- Bcoz the radio button can not be unselected  
    // in Automation perspective the button is being checked--> to be or not to be checked. 
    expect(maleRadioButton).not.toBeChecked();
    expect(femaleRadioButton).not.toBeChecked();

    await maleRadioButton.check(); 
    expect(await maleRadioButton.isChecked()).toBeTruthy(); // to be(true)--> Boolean 
    expect(await femaleRadioButton.isChecked()).toBeFalsy();

    await femaleRadioButton.check(); 
    expect(await maleRadioButton.isChecked()).toBe(false);// to be(false)--> Boolean 
    expect(await femaleRadioButton.isChecked()).toBeTruthy(); 
 }); 