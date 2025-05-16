import {Page, Locator,} from '@playwright/test';
import BasePage from './basePage';

export class AdminPage extends BasePage {
    readonly employeeNameTextBox : Locator;
    readonly searchButtonClick : Locator;
    
constructor (page:Page) {
    super(page)
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

