const { test } = require('./Auth'); // using loggedInPage fixture
const { FirmwarePage } = require('../pages/FirmwarePage');


function firmwareTests() {
test('Create firmware - success flow', async ({ loggedInPage }) => {
  const firmwarePage = new FirmwarePage(loggedInPage);
  const version = `1.5.${Date.now()}`;
  const appVersion = '1.0.0.0';
  const filePath = 'uploads/images.hex'; // Full path to the file

 


  await firmwarePage.goToFirmwareSection();
  await firmwarePage.createFirmware(version, appVersion, filePath);

  await firmwarePage.assertFirmwareCreated(); // Optional if no message exists
});

}

module.exports = firmwareTests; // Exporting for potential use in other test files