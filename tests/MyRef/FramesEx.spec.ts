import {test,expect} from '@playwright/test';
test('Interacting with iframe', async({page})=>
{
await page.goto("https://www.lambdatest.com/selenium-playground/iframe-demo/");
const frame = await page.frameLocator(`#iFrame1`);
const framebox = await frame.locator("//div[contains(text(),'Your content.')]");
const msg =await framebox.textContent();
console.log(msg);
await expect(msg).toContain('Your content.');
await framebox.click();
console.log(framebox);
await framebox.fill('enter the value');

// const contentDiv = frame.locator("//div[contains(text(),'Your content.')]");
// await expect(contentDiv).toBeVisible();
// const divText = await contentDiv.textContent();

// // Log and verify the text
// console.log('Frame text:', divText);
// await expect(contentDiv).toContainText('Your content.');

// // Try to interact with the frame content
// await contentDiv.click();
// await page.keyboard.type('Entering the text in the iframe');
await page.waitForTimeout(3000);

});