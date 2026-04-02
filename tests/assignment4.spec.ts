import { test, expect } from '@playwright/test';
import { practiceForm} from '../POM/practiceForm.page';
import practiceFormDetails from '../test-data/practiceFormDetails.json';


test ( 'Filling the Practice Form', async ({page}) => {

    const pPage = new practiceForm(page);

    const{url , fName, lName, email, mobile, address} = practiceFormDetails;
    await pPage.navigate(url);


    await pPage.fillTheForm(fName, lName, email, mobile, address);

    await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
})