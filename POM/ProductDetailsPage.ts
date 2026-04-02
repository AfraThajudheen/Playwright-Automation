import { Page } from '@playwright/test';
 
export class ProductDetailPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;  
 }
  async fillrecipientsdetails(name : string, email: string) {
     await this.page.getByRole('textbox', { name: 'Recipient\'s Name:' }).fill(name);
    await this.page.getByRole('textbox', { name: 'Recipient\'s Email:' }).fill(email);
  }
}
 