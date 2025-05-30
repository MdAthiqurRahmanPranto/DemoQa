// Use the custom test fixture from Auth.js
const { test } = require('./Auth');
const { HardwarePage } = require('../pages/HardwarePage');

test('Create hardware - success flow', async ({ loggedInPage }) => {
  const hardwarePage = new HardwarePage(loggedInPage);

  await hardwarePage.goToHardwareSection();
  const version = `1.8.${Date.now()}`;
  await hardwarePage.createHardware(version);
  await hardwarePage.assertSuccessMessage();
});
