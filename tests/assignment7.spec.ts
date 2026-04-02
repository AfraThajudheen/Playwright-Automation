import { test, expect, chromium } from '@playwright/test';
import { LoginPage } from '../POM/LoginPage';
import { HomePage } from '../POM/HomePage';
import { CartPage } from '../POM/CartPage';
import { ProductDetailPage } from '../POM/ProductDetailsPage';
import users from '../test-data/multiUserData.json';

test.describe.parallel('parallel execution',()=>{

test('Multi-user different scenarios with isolated sessions', async () => {
 const browser = await chromium.launch();
 // ================= USER 1 =================
  await Promise.all([
    ( async () => {
            const context1 = await browser.newContext();
            const page1 = await context1.newPage();
            const login1 = new LoginPage(page1);
            const home1 = new HomePage(page1);
            const cart1 = new CartPage(page1);
            const productDetail1 = new ProductDetailPage(page1);

            await login1.navigate(users.url7 + '/login');
            await login1.login(users.user1.email, users.user1.password);
            // 👉 Scenario: Add FIRST product
            await home1.addFirstProductToCart();
            await productDetail1.fillrecipientsdetails(users.recipientdetails.recipientName, users.recipientdetails.recipientEmail);
            await cart1.PDaddtocart();  
            await home1.goToCart();
            await cart1.verifyCartNotEmpty();
            const user1CartItems = await page1.locator('.cart-item-row').count();
            console.log('User1 Cart Count:', user1CartItems);
            await expect(user1CartItems).toBeGreaterThan(0);


        })(),     
 // ================= USER 2 =================

    ( async () => {
 
            const context2 = await browser.newContext();
            const page2 = await context2.newPage();
            const login2 = new LoginPage(page2);
            const home2 = new HomePage(page2);
            const cart2 = new CartPage(page2);
            await login2.navigate(users.url7 + '/login');
            await login2.login(users.user2.email, users.user2.password);
            // 👉 Scenario: Add SECOND product
            await home2.addsecondProductToCart();
            await home2.goToCart();
            await cart2.verifyCartNotEmpty();
            // ================= VALIDATION =================
            // 👉 Ensure carts are different (session isolation)
           // const user1CartItems = await page1.locator('.cart-item-row').count();
            const user2CartItems = await page2.locator('.cart-item-row').count();
            // console.log('User1 Cart Count:', user1CartItems);
            console.log('User2 Cart Count:', user2CartItems);
            // await expect(user1CartItems).toBeGreaterThan(0);
            await expect(user2CartItems).toBeGreaterThan(0);
            // await browser.close();
            }) ()

 
 ]);

 await browser.close;
});
})