import {test, expect, Locator} from '@playwright/test';
import { practiceForm } from '../POM/practiceForm.page';
test.describe('Negative Testing',()=>{
    test('submit form without mandatory fields',async({page})=>{
        await page.goto('https://demoqa.com/automation-practice-form');
        const firstName = page.getByRole('textbox', { name: 'First Name' });
        const lastName = page.getByRole('textbox', { name: 'Last Name' });
        const male = page.getByRole('radio', { name: 'Male', exact: true });
        const female = page.getByRole('radio', { name: 'Female' });
        const other = page.getByRole('radio', { name: 'Other' });
        const mobile = page.getByRole('textbox', { name: 'Mobile Number' });
        const getBorderColor = async(element : Locator)=>{
            return await element.evaluate((el)=>
            window.getComputedStyle(el).borderColor);
        };
        const beforeFirstNameColor = await getBorderColor(firstName);
        const beforeLastNameColor = await getBorderColor(lastName);
        const beforeMobileColor = await getBorderColor(mobile);
 
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.getByText('Thanks for submitting the form')).not.toBeVisible();
 
        const firstNameColor = await getBorderColor(firstName);
        const lastNameColor = await getBorderColor(lastName);
        const mobileColor = await getBorderColor(mobile);
 
        expect(firstNameColor).not.toBe(beforeFirstNameColor);
        expect(lastNameColor).not.toBe(beforeLastNameColor);
        expect(mobileColor).not.toBe(beforeMobileColor);
 
        await expect(male).not.toBeChecked();
        await expect(female).not.toBeChecked();
        await expect(other).not.toBeChecked();
    });
});