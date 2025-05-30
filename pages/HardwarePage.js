const { expect } = require('@playwright/test');

exports.HardwarePage = class HardwarePage {
  constructor(page) {
    this.page = page;
    this.hardwareLink = page.getByRole('link', { name: 'Hardwares' });
    this.createButton = page.getByRole('button', { name: ' Create Hardware' });
    this.versionInput = page.getByRole('textbox', { name: 'Enter Hardware version' });
    this.checkbox = page.getByRole('checkbox');
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

  async goToHardwareSection() {
    await this.hardwareLink.click();
  }

  async createHardware(version) {
    await this.createButton.click();
    await this.versionInput.fill(version);
    await this.checkbox.check();
    await this.saveButton.click();
  }

  async assertSuccessMessage() {
    const successMessage = this.page.getByText('Hardware created successfully');
    await expect(successMessage).toBeVisible();
  }
};
