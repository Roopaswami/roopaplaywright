import { faker } from '@faker-js/faker';
import {expect, test} from '@playwright/test';
 
test(`Web login demo`, async ({page}) => {
    await page.goto(`https://www.lambdatest.com/selenium-playground/checkbox-demo`);
    await page.waitForLoadState(`domcontentloaded`);
    await page.locator(`//*[@id='isAgeSelected']`).check();
    await page.waitForTimeout(3000);
    await expect(await page.locator(`//*[@id='txtAge']`)).toBeVisible;



});

