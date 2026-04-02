import { Page, expect} from '@playwright/test';
import testdata from "../test-data/multiUserData.json";
export class HomePage{
    readonly page:Page;
    constructor (page: Page){
        this.page = page;
    }
    async addFirstProductToCart(){
        await this.page.click('.product-box-add-to-cart-button');
    }

    async addsecondProductToCart(){
        await this.page.locator('.product-box-add-to-cart-button').nth(1).click();
    }

   async goToCart(){
        await this.page.click('.cart-label');
    }

    
}