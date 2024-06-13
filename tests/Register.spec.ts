import { test, expect } from '@playwright/test';

const name = 'nga';
const email = 'nga.nguyen@yopmail.com';
const accountTitle = 'Mrs';
const accountPassword = '123456';
const dob = {
  'date' : 4,
  'month': 12,
  'year' : 1986

}
const firstName = 'Nga';
const lastName = 'Nguyen';
const company = 'Optimizely';
const address = '165 Thai Ha';
const address2 = '189 Thai Ha';
const country = 'Singapore';
const state = 'Long Bien';
const city = 'Ha Noi';
const zipCode = '101111';
const mobileNumber = '098623232';

test('Register User',async ({page}) => {
  await page.goto('https://automationexercise.com/');
  
  await expect(page).toHaveTitle('Automation Exercise');

  await page.locator('//a[contains(text(),"Login")]').click();

  await expect(page.locator('//h2[contains(text(),"Signup")]')).toBeVisible();

  await page.locator('div.signup-form input[name ="name"]').fill(name);

  await page.locator('div.signup-form input[name ="email"]').fill(email);

  await page.locator('button[data-qa ="signup-button"]').click();

  // Step 7 verify heading 
  await expect(page.locator('//h2[contains(.,"Enter Account Information")]')).toBeVisible();

  //Step 8 9
  await page.locator(`input[value="${accountTitle}"]`).check();
  await page.locator('input#password').fill(`${accountPassword}`);
  await page.locator('select#days').selectOption(`${dob.date}`);
  await page.locator('select#months').selectOption(`${dob.month}`);
  await page.locator('select#years').selectOption(`${dob.year}`);

  // Step 10
  await page.locator('input#newsletter').check();
  await page.locator('input#optin').check();
  await page.locator('input#first_name').fill(firstName);
  await page.locator('input#last_name').fill(lastName);
  await page.locator('input#company').fill(company);



});