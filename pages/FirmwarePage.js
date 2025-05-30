const { expect } = require('@playwright/test');

exports.FirmwarePage = class FirmwarePage {
  constructor(page) {
    this.page = page;
    this.firmwareLink = page.getByRole('link', { name: 'Firmwares' });
    this.createButton = page.getByRole('button', { name: ' Create Firmware' });
    this.versionInput = page.getByRole('textbox', { name: 'Enter Firmware Version. Ex: 1.1,' });
    this.firmwareTypeDropdown = page.locator('#kt_content svg').nth(1);
    this.firmwareTypeOption = page.getByText('Bootloader Firmware', { exact: true });
    this.hardwareVersionDropdown = page.locator('#kt_content svg').nth(2);
    this.hardwareVersionOption = page.locator('[id^="react-select"][id$="-option-0"]');
    this.appVersionInput = page.getByRole('textbox', { name: 'Enter app versions with one' });
    this.inactiveRadio = page.getByRole('radio', { name: 'Inactive' });
    this.chooseFileInput = page.locator('input[type="file"]');
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

  async goToFirmwareSection() {
    await this.firmwareLink.click();
  }


  async createFirmware(version, appVersion, filePath) {
    await this.createButton.click();
    await this.versionInput.fill(version);

    await this.firmwareTypeDropdown.click();
    await this.firmwareTypeOption.click();
    

    await this.hardwareVersionDropdown.click();
    await this.hardwareVersionOption.click();
   

    await this.appVersionInput.fill(appVersion);
    await this.page.keyboard.press('Space');
    await this.inactiveRadio.check();
    await this.chooseFileInput.setInputFiles(filePath); 
    await this.saveButton.click();
  }

  async assertFirmwareCreated() {
    const successMessage = this.page.getByText('Firmware created successfully'); // Update based on actual message
    await expect(successMessage).toBeVisible();
  }
};
