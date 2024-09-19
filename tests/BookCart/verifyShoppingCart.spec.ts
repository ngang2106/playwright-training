import { test, expect } from '@playwright/test';
import { assert } from 'console';

const username = 'nganguyen';
const password = '123456aA@';

test('Verify Shopping cart',async ({page}) => {
  await page.goto('https://bookcart.azurewebsites.net/login');

  await page.fill('input[placeholder ="Username"]', username);

  await page.fill('input[placeholder ="Password"]',password);

  await page.click('//span[text()="Login"]');

  await page.click('//mat-icon[text()="shopping_cart"]');

  await expect(page.locator('//mat-card-title[text()="Your shopping cart is empty."]')).toBeVisible();

});

test('Verify back to main page',async ({page}) => {
    await page.goto('https://bookcart.azurewebsites.net/shopping-cart');
    
    await page.click('//span[text()=" Continue shopping "]');
  
    await expect(page).toHaveURL('https://bookcart.azurewebsites.net/');
  
  });

  test('Verify adding product to shopping cart',async ({page}) => {
    await page.goto('https://bookcart.azurewebsites.net/login');
  
    await page.fill('input[placeholder ="Username"]', username);
  
    await page.fill('input[placeholder ="Password"]',password);
  
    await page.click('//span[text()="Login"]');
  
    await page.click('//mat-icon[text()="shopping_cart"]');
  
    await expect(page.locator('//mat-card-title[text()="Your shopping cart is empty."]')).toBeVisible();
  
  });