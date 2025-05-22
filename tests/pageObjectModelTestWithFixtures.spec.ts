// Page- 
// test isolation, reusable code, parallel execution, resource management 
import { test } from '@playwright/test'; 
import { LoginPage } from './pages/loginPage'; // Import Class not the file name. 
import { AdminPage } from './pages/adminPage';
import { DashboardPage } from './pages/dashboardPage'; 

test("Orange HRM Login Test", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); 
    const adminPage = new AdminPage(page); 
    const dashboardPage = new DashboardPage(page); 
    const loginPage = new LoginPage(page); 

}); 