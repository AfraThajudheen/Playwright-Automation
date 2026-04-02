import { Page, expect } from '@playwright/test';
export class CartPage {
 readonly page: Page;
 constructor(page: Page) {
   this.page = page;
 }
 async verifyCartNotEmpty() {
   await expect(this.page.locator('.cart-item-row')).toBeVisible();
 }
 async verifyProductInCart(productName: string) {
   await expect(this.page.locator('.product-name')).toContainText(productName);
 }
 async PDaddtocart() {
   await this.page.locator('#add-to-cart-button-2').click();
 }
}
