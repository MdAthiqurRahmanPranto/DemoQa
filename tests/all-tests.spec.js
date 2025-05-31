// all-tests.spec.js
const { test } = require('@playwright/test');
const hardwareTests = require('./hardware.spec.js');
const firmwareTests = require('./Firmware.spec.js');

test.describe.serial('Run Hardware and Firmware Tests Serially', () => {
  // You can directly paste the test code here from hardware.spec.js and firmware.spec.js
  // But here's how to call them if you modularize
  
  // If your hardware.spec.js and firmware.spec.js use export functions:
  hardwareTests();
  firmwareTests();
});
