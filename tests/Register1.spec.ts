import { test, expect } from '@playwright/test';
import { assert } from 'console';

test('Register User',async ({page}) => {
  await page.goto('https://automationexercise.com/');

});