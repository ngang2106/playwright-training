import { test, expect } from '@playwright/test';
import { assert } from 'console';

const username = 'ngan.dinh@optimizely.com';
const password = '@Summer2024';
const authFile = "./auth/login.json";

test('Login',async ({page}) => {
  await page.goto('https://www.ericsson.com/en');

  await page.click('a.log-in');

  await page.fill('input[name="loginfmt"]',username);
  await page.click('input#idSIButton9');
  await page.fill('#passwordInput', password);
  await page.click('#submitButton');

  // Verìy login successfully

  await expect(page.locator('//h1[text()="Welcome Ngan"]')).toBeVisible();

  // store authen info to a file

  await page.context().storageState({path: authFile});



});