import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByRole('textbox', { name: 'First Name' }).fill('Afra');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Thajudheen');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('afrathaju@email.com');
  await page.getByRole('radio', { name: 'Female' }).check();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9876543210');
  await page.getByRole('checkbox', { name: 'Sports' }).check();
  await page.locator('#state svg').click();
  await page.getByRole('option', { name: 'Rajasthan' }).click();
  await page.locator('#city svg').click();
  await page.getByRole('option', { name: 'Jaiselmer' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect( page.getByText('Thanks for submitting the form')).toBeVisible();
});