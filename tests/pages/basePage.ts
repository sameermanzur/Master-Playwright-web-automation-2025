import { Page, Locator } from "@playwright/test";

export default class BasePage { //Depends on Use Case we can create many methods. 
    // wait for Element Visibility (for locators)
    // b_ base method 
    readonly page : Page

    constructor(page :Page){
        this.page = page; 
    }

    async b_navigateTo(url:string, maxTimeOut?: number){
        await this.page.goto(url); 
    }

    async b_clickElement(element:Locator){
        await element.click(); 
    }

    async b_waitForElementVisibility(element:Locator, maxTimeOut?:number){// wait for Element Visibility (for locators)
        await element.waitFor({state:'visible', timeout:maxTimeOut}); 
    }

    async b_fillFilled(element:Locator,text:string, isForceFill?:boolean, maxTimeOut?:number){
        await this.b_waitForElementVisibility(element, maxTimeOut)
        await element.fill(text, {timeout:maxTimeOut, force: isForceFill}); 
    }

}
