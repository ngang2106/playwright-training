import { test, expect } from '@playwright/test';
import { assert } from 'console';

test('Verify content1',async ({page}) => {
  await page.goto('https://www.ericsson.com/en/myericsson');

});

test('Verify content2',async ({page}) => {
  await page.goto('https://www.ericsson.com/en/myericsson');

});

test('Verify content3',async ({page}) => {
  await page.goto('https://www.ericsson.com/en/myericsson');

});