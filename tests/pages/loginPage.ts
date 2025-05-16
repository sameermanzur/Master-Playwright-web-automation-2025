// It should contain only locators and Methods of Login Page. 
// Never include Assertions in POM 
// For JS manual export required 

import { Page, Locator } from '@playwright/test';

// Class always starts with Uppercase 
export class LoginPage { //Class should always be exported 
   private readonly page: Page //VariableName : DataType (interface coming from types.d.ts) //Global Variable 
   private readonly userNameTextbox: Locator; // Jars 
   private readonly passwordTextbox: Locator; 
   private readonly loginButton: Locator; 

// object instantiation-(initializes the page elements) To fill the locators in the Jars - 
   constructor(page: Page) { // pass the values in a correct sequence. 
    // Bridge between my Class and the external property. 
    this.page = page //Assign the value of local variable to the Global variable. 
    this.userNameTextbox = page.locator('[name="username"]'); 
    this.passwordTextbox = page.locator('//input[@placeholder="Password"]'); 
    this.loginButton = page.locator('[type="submit"]'); 
   }

   // Methods - We wrote a function inside the Class 
// async enterUserName(){
//     await this.userNameTextbox.fill('Admin');
// }

async enterUserName(userNameText: string){ // 
    await this.userNameTextbox.fill(userNameText);
}

async enterPassword(passwordText: string){
    await this.passwordTextbox.fill(passwordText);

}
async clickLogin(){
    await this.loginButton.click(); 
} 
}




