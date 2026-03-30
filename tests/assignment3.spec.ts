import { test, expect } from '@playwright/test';



test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/');
})

test('navitaging to TextBox', async ({ page }) => {

  await page.getByRole('link', { name: 'Elements' }).click();
  await page.getByRole('link', { name: 'Text Box' }).click();

  await expect(page.locator('h1')).toHaveText('Text Box');
  });


test('navigating to Practice Form', async ({ page }) => {

  await page.getByText('Forms').click();
  await page.getByRole('link', { name: 'Practice Form' }).click();

  await expect(page.getByRole('heading',{ name: 'Practice Form'} )).toBeVisible();
  });


test('navigating to Select Menu', async ({ page }) => {

  await page.getByText('Widgets').click();
  await page.getByRole('link', { name: 'Select Menu' }).click();

  
   await expect(page.getByRole('heading', { name: 'Select Menu' })).toBeVisible();

});