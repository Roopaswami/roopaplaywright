import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
  await page.locator('#select-demo').selectOption('Monday');
  await page.locator('#multi-select').selectOption('California');
  await page.locator('#multi-select').selectOption(['California', 'Florida']);
  await page.locator('#multi-select').selectOption(['California', 'Florida', 'New Jersey']);
  await page.locator('#multi-select').selectOption(['California', 'Florida', 'New Jersey', 'New York']);
  await page.getByRole('button', { name: 'First Selected' }).click();
  await page.waitForTimeout(3000);
});