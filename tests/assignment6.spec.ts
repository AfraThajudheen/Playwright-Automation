import { test, expect } from '@playwright/test';
import { FormPage } from '../POM/formPage';


test('Negative Test - Submit empty form', async ({ page }) => {
    const form = new FormPage(page);

    await form.navigate();
    await form.submitEmptyForm();
    await form.verifyValidationErrors();


})