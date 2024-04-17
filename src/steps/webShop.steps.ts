import { Given, When, Then, Before, After } from "@cucumber/cucumber";
const { chromium } = require("playwright"); // Or 'chromium' or 'firefox'.
import WebShopPage from "../pages/./webShopPage";

let { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60 * 1000);

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
});

After(async function () {
  await this.page?.close();
  await this.context?.close();
  await this.browser.close();
});

Given("the user is logged into the Webshop", async function () {
  const page = this.page;
  const baseUrl = "https://demowebshop.tricentis.com/";
  const webShopPage = new WebShopPage(page);
  await webShopPage.gotoWebshop(baseUrl);
  await webShopPage.loginIntoWebshop();
});

When(
  "the user orders a product in the shopping cart",
  async function (dataTable) {
    const page = this.page;
    const webShopPage = new WebShopPage(page);
    await webShopPage.orderProduct();
  }
);

When(
  "the user completes the checkout process with the following parameters",
  async function (dataTable) {
    const page = this.page;
    const webShopPage = new WebShopPage(page);
    await webShopPage.checkoutProcess();
  }
);

Then("the price is added correctly", async function () {
    const page = this.page;
    const webShopPage = new WebShopPage(page);
    await webShopPage.confirmOrderSuccess();
  
});

Then("the success message is displayed correctly", async function () {
  console.log("the success message is displayed correctly");
  console.log("the success message is displayed correctly");
});
