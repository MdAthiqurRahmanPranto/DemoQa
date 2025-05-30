const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[type="text"]');
    this.passwordInput = page.locator('input[type="password"]'); 
    this.signInButton = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto('https://www.emobility-stage.me-solshare.net/auth/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
};
