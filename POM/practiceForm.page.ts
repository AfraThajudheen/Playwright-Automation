import { Page } from "@playwright/test";

export class practiceForm{
    readonly page: Page;


    constructor(page : Page){
        this.page=page;
    }

async navigate(url:string){
        await this.page.goto(url);
}



async fNameTbx(fName : string){
      await this.page.getByRole('textbox', { name: 'First Name' }).fill(fName);
}
async lNameTbx(lName : string){
      await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lName);
}
async emailTbx(email : string){
      await this.page.getByRole('textbox', { name: 'name@example.com' }).fill(email);
}
async genderCkbx(){
        await this.page.getByRole('radio', { name: 'Female' }).check();
}
async mobileTbx(mobile : string){
      await this.page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobile);
}


async selectDOB(year: string, month: string, day: string) {
    await this.page.locator('#dateOfBirthInput').click();

    await this.page.locator('.react-datepicker__year-select')
        .selectOption(year);

    await this.page.locator('.react-datepicker__month-select')
        .selectOption(month);

    await this.page.locator(`.react-datepicker__day--0${day}`)
        .click();
}



// await page.locator('#dateOfBirthInput').click();
//   await page.getByRole('gridcell', { name: 'Choose Friday, March 27th,' }).selectOption('2003');
//   await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('5');
//   await page.getByRole('gridcell', { name: 'Choose Monday, June 23rd,' }).click();
//   await page.locator('#subjectsContainer div').nth(3).click();




async addressTbx(address : string){
      await this.page.getByRole('textbox', { name: 'Current Address' }).fill(address);
}

async submitBtn(){
      await this.page.getByRole('button', { name: 'Submit' }).click();
}


async fillTheForm(fName : string, lName : string, email : string, mobile : string, address : string, 
    // year: string, month: string, day: string
){
    await this.fNameTbx(fName);
    await this.lNameTbx(lName);
    await this.emailTbx(email);
    await this.genderCkbx();
    await this.mobileTbx(mobile);
    // await this.selectDOB(year, month, day);
    await this.addressTbx(address);
    await this.submitBtn();
}

}