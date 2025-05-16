import {test, Locator, Page} from '@playwright/test';

export class AdminPage {
    readonly page : Page;
    readonly employeeNameTextBox : Locator;
    readonly searchButtonClick : Locator;
    
constructor (page:Page) {
    this.employeeNameTextBox = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
    this.searchButtonClick = page.locator('[type="submit"]'); 
}

async enterUserName(userNameText:string){
    await this.employeeNameTextBox.fill(userNameText);

}

async ClickSearchButton(){
    await this.searchButtonClick.click(); 
}
}

