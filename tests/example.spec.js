// tests/clickWidget.spec.js

const { test, expect } = require('@playwright/test');

test('Click on Widgets card on demoqa homepage', async ({ page }) => {
  // Go to the homepage
  await page.goto('https://demoqa.com/');
  await page.locator('div:nth-child(2) > div > .card-up').click();
  await page.locator('span').filter({ hasText: 'Forms' }).locator('div').first().click();
  await page.getByRole('listitem').click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('asddas');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('d');
  await page.getByText('Male', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  // 1st push from my local machine 

});
