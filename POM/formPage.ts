import { expect, Page } from "@playwright/test";

export class FormPage{
    constructor( private page : Page){}

    async navigate(){
        await this.page.goto('https://demoqa.com/automation-practice-form');
    }

    async submitEmptyForm(){
        await this.page.click('#submit');

    }

    async verifyValidationErrors(){
       
        await expect(this.page.locator('.was-validated')).toBeVisible();
        

    }
}