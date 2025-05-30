// tests/Auth.js
const { test: base } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

exports.test = base.extend({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('01738169709', '12$33aA');
    await use(page);
  }
});
