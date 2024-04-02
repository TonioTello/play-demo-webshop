import { expect, type Locator, type Page } from "@playwright/test";
import  {SELECTOR} from "../locatores/locator.webshop"

export default class WebShopPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoWebshop(baseUrl:string) {
    await this.page.goto(baseUrl);
  }

  async loginIntoWebshop() {
    await this.page.getByRole("link", { name: "Log in" }).click();
    await this.page.getByLabel("Email:").click();
    await this.page.getByLabel("Email:").fill("t3st3rqa@gmail.com");
    await this.page.getByLabel("Password:").click();
    await this.page.getByLabel("Password:").fill("123tester");
    await this.page.getByRole("button", { name: "Log in" }).click();
    await expect(
      this.page.getByRole("link", { name: "t3st3rqa@gmail.com" })
    ).toBeVisible();
    await expect(this.page.locator("body")).toContainText("t3st3rqa@gmail.com");
  }

  async orderProduct() {
    const page = this.page;
    await page.getByRole('link', { name: 'Apparel & Shoes' }).first().click();
    await page.getByRole('link', { name: 'Blue Jeans', exact: true }).click();
    await page.locator('.product-price').click();
    await expect(page.locator('#product-details-form')).toContainText('1.00');
    await page.getByLabel('Qty:').click();
    await page.getByLabel('Qty:').fill('25');
    await page.locator('#add-to-cart-button-36').click();
    await expect(page.getByText('The product has been added to')).toBeVisible();
    await expect(page.locator('#bar-notification')).toContainText('The product has been added to your shopping cart');
    await page.getByRole('link', { name: /Shopping cart \(\d+\)/i }).click();
    await page.locator('#termsofservice').check();
  }

  async checkoutProcess() {
    const page = this.page;
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.locator(SELECTOR.billingAddressContinue).waitFor();
    await page.locator(SELECTOR.billingAddressContinue).click();
    await page.locator(SELECTOR.shippingAddressContinue).waitFor();
    await page.locator(SELECTOR.shippingAddressContinue).click();
    await page.locator(SELECTOR.shippingMethodContinue).waitFor();
    await page.locator(SELECTOR.shippingMethodContinue).click();
    await page.getByLabel('Credit Card').check();
    await page.locator(SELECTOR.paymentMethodContinue).waitFor();
    await page.locator(SELECTOR.paymentMethodContinue).click();
    await page.locator('#CreditCardType').selectOption('MasterCard');
    await page.getByLabel('Cardholder name').click();
    await page.getByLabel('Cardholder name').fill('Tester QA');
    await page.getByLabel('Card number').click();
    await page.getByLabel('Card number').fill('4000300020001000');
    await page.getByLabel('Expiration date').selectOption('7');
    await page.locator('#ExpireYear').selectOption('2034');
    await page.getByLabel('Card code').click();
    await page.getByLabel('Card code').fill('321');
    await page.locator(SELECTOR.paymentInfoContinue).waitFor();
    await page.locator(SELECTOR.paymentInfoContinue).click();
    await expect(page.locator('#checkout-confirm-order-load')).toContainText('25');
    await expect(page.locator('#checkout-confirm-order-load')).toContainText('25.00');
    await expect(page.locator('#checkout-confirm-order-load')).toContainText('35.00');
    await page.getByRole('button', { name: 'Confirm' }).click();
}
async confirmOrderSuccess() {
    const page = this.page;
    await expect(page.locator('body')).toContainText('Your order has been successfully processed!');
    await page.getByText('Order number:').click();
    await expect(page.locator('body')).toContainText(/Order number: \d+/i);
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('link', { name: 'Log out' }).click();
    await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible(); 
}

}
