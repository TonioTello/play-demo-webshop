import { Given, When, Then } from "@cucumber/cucumber";
const { chromium } = require('playwright');  // Or 'chromium' or 'firefox'.
import {  expect } from '@playwright/test';

let {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

Given("the user is logged into the Webshop", async function () {
    const browser = await chromium.launch({ headless: false, slowMo: 100 });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demowebshop.tricentis.com/');
    
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').fill('t3st3rqa@gmail.com');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').fill('123tester');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('link', { name: 't3st3rqa@gmail.com' })).toBeVisible();
    await expect(page.locator('body')).toContainText('t3st3rqa@gmail.com');
     await page.getByRole('link', { name: 'Apparel & Shoes' }).first().click();
    await page.locator('div:nth-child(3) > .product-item > .picture').click();
    await page.getByLabel('Qty:').click();
    await page.getByLabel('Qty:').fill('25');
    await page.getByLabel('Qty:').press('Enter');
    //await page.screenshot({ path: 'screenshot.png' });
    await browser.close();
});

When(
  "the user orders a product in the shopping cart",
  async function (dataTable) {
    console.log(dataTable);
  }
);

When(
  "the user completes the checkout process with the following parameters",
  async function (dataTable) {
    console.log(
      "the user completes the checkout process with the following params"
    );
  }
);

Then("the price is added correctly", async function () {
  console.log("the price is added correctly");
});

Then("the success message is displayed correctly", async function () {
  console.log("the success message is displayed correctly");
});
