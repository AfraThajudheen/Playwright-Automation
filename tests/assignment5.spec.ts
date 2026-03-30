import { test, expect } from '@playwright/test';
import { practiceForm } from '../POM/practiceForm.page';
import testData from '../test-data/assignment5Details.json';
import practiceFormDetails from '../test-data/practiceFormDetails.json';

testData.forEach((data) => {
  test(`Form submission test for ${data.fName}`, async ({ page }) => {

    const formPage = new practiceForm(page);

    const{url} = practiceFormDetails;
    await formPage.navigate(url);

    //await formPage.navigate('https://demoqa.com/automation-practice-form');

    await formPage.fillTheForm(
      data.fName,
      data.lName,
      data.email,
      data.mobile,
      data.address
    );

    await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
  });
});