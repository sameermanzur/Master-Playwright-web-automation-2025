# Playwright-Automation

A robust, scalable test automation framework built with Playwright and TypeScript, leveraging the Page Object Model (POM) design pattern to support both UI and API testing. This project serves as a hands-on learning initiative to deepen expertise in modern end-to-end testing strategies and best practices.

## How to Start

Follow these steps to get your project up and running:

1. **Clone the project**
   - Use your favorite Git tool or the command line:  
     `git clone <repository-url>`
2. **Install Dependencies**
   - Run:  
     `npm i`
3. **Execute Tests**
   - To execute all tests, run:  
     `npx playwright test`
   - To execute a single test (e.g., login test), run:  
     `npx playwright test tests/loginTest.spec.ts`
4. **Generate Allure HTML Reports**
   - Run the following command to generate reports:  
     `npx playwright test --reporter=line,allure-playwright`
   - Then run:  
     `npm run allure:generate`

## Features

- **UI Testing:** Automated browser testing using Playwright.
- **API Testing:** Built-in API testing capabilities.
- **Page Object Model:** Structured and maintainable page objects.
- **TypeScript Support:** Full TypeScript implementation for type safety.
- **Parallel Execution:** Run tests concurrently across multiple browsers.
- **Cross-browser Testing:** Support for Chromium, Firefox, and WebKit.
- **Reporting:** Detailed HTML reports with screenshots and traces.
- **CI/CD Ready:** Seamlessly integrable with CI/CD pipelines.
- **Docker Support:** Containerized test execution.
