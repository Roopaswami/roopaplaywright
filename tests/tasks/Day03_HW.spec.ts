import { test, expect } from '@playwright/test';

test('verify the checkbox', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo');
// const checkbox2 = page.getByLabel('Option 2');
const checkboxes = page.locator(`//div[contains(text(),"Disabled Checkbox Demo")]/following::input[@type="checkbox"]`);
const count =await checkboxes.count();

      for (let i = 0; i < count; i++) {
        const checkbox = checkboxes.nth(i);
        
         if (!(await checkbox.isDisabled())) {
            await checkbox.check();
            await expect(checkbox).toBeChecked();
            console.log(`Checked checkbox ${i + 1}`);
        } else {
            console.log(`Checkbox ${i + 1} is disabled - skipping`);
        }
    }
    await page.waitForTimeout(3000);
});
