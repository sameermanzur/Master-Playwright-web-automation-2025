// What is POM-  Design pattern in test automation that creates an object repository for web UI elements. 
// An object repository is a centralized place where all the web elements (like buttons, fields, links) of a web page are stored as objects.
// This allows you to manage locators in one place, making maintenance easier if the UI changes.
// Each page of the application is represented by a class, and the interactions with the page are defined as methods in that class.
// Page , Object - Class; 
// New Page class- In Each Page transition- we will create new Pages with all the locators. 
// This makes tests more maintainable, reusable, and readable. //code redundancy //external changes should have least impact. 
// Traverse pages through constructors 
// Inheritance- where a class (child) acquires properties and behaviors (methods) from another class (parent). 
// Establish connection of 3 Pages to Base Page using extends keyword and super(page)
// We write Base Pages, and cases 

import { test } from '@playwright/test'; 

// 3 Page Object Model classes for End to End testing 
// Login Page 
// Dashboard Page 
// Admin Page 

import { LoginPage } from './pages/loginPage'; // Import Class not the file name. 
import { AdminPage } from './pages/adminPage';
import { DashboardPage } from './pages/dashboardPage'; 


test("Orange HRM Login Test", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); 
    // Syntax for Object Instantiation or Declaration
    // const objectName = new ClassName();

    const adminPage = new AdminPage(page); 
    const dashboardPage = new DashboardPage(page); 
    const loginPage = new LoginPage(page); 


    await loginPage.enterUserName('Admin')
    await loginPage.enterPassword('admin123');
    await loginPage.clickLogin(); 

    await dashboardPage.ClickdashBoardTab();
    await dashboardPage.ClickAdminTab();
    await adminPage.enterUserName('Admin'); 
    await adminPage.ClickSearchButton();

    await dashboardPage.ClickdProfileAccordion();
    await dashboardPage.ClickLogoutLink(); 
}); 

