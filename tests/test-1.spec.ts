import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
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
  // await page.getByRole('button', { name: 'Add to cart' }).nth(2).click();
  await page.locator('div:nth-child(3) > .product-item > .picture').click();
  await page.getByLabel('Qty:').click();
 // await page.getByLabel('Qty:').press('Shift+ArrowLeft');
  await page.getByLabel('Qty:').fill('25');
  await page.getByLabel('Qty:').press('Enter');
  //await page.locator('#add-to-cart-button-36').click();
});