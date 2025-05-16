import { Page, Locator } from '@playwright/test'; 
import BasePage from './basePage';

export class DashboardPage extends BasePage {

    private readonly dashBoardTab: Locator;
    private readonly adminTab : Locator; 
    private readonly profileAccordion: Locator;
    private readonly logoutLink: Locator;

    constructor(page : Page){
        super(page); 
        this.dashBoardTab = page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]');
        this.adminTab = page.locator('[href="/web/index.php/admin/viewAdminModule"]');
        this.profileAccordion = page.locator('[class="oxd-userdropdown-name"]');
        this.logoutLink = page.locator('[href="/web/index.php/auth/logout"]');
    }

    async ClickdashBoardTab(){
        await this.dashBoardTab.click(); 
    }

     async ClickAdminTab(){
        await this.adminTab.click(); 
    }

     async ClickdProfileAccordion(){
        await this.profileAccordion.click(); 
    }

     async ClickLogoutLink(){
        await this.logoutLink.click(); 
    }
    }