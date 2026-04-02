import { Page, expect} from '@playwright/test';
import testdata from "../test-data/multiUserData.json";
export class LoginPage{
    readonly page:Page;
    constructor (page: Page){
        this.page = page;
    }
    async navigate(url7 : string){
        await this.page.goto(url7);
    }

    async login (email: string, password: string ){
        await this.page.fill('#Email', email);
        await this.page.fill('#Password', password);
        await this.page.click('input[value="Log in"]');


    }

    async verifyLogin(){
        await expect(this.page.locator('.account')).toBeVisible();
    }
}