import { faker } from '@faker-js/faker';
import {expect, test} from '@playwright/test';
 
test(`Web login demo`, async ({page}) => {
    await page.goto(`https://thinking-tester-contact-list.herokuapp.com/addUser`);
    await page.waitForLoadState(`domcontentloaded`);
    // expect(page.locator(`//h1`).innerText()).toBe(`Add User`);  
    await expect(page.locator(`//h1[text()='Add User']`)).toBeVisible();
    await page.locator(`#firstName`).fill(faker.person.firstName());
    await page.locator(`//input[@id='lastName']`).pressSequentially('lastName');
    await page.locator(`//input[@placeholder='Email']`).fill(faker.internet.email());
    await page.locator(`//*[@type='password']`).fill(faker.string.alphanumeric(10));
    await page.locator(`#submit`).click();
    await page.waitForTimeout(3000);
})