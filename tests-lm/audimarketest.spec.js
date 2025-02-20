
import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
  await page.goto('https://www.leasingmarkt.de/listing');
  await page.getByTestId('as24-cmp-accept-all-button').click();
  await page.locator('.redesign-dropdown__label-icon > .text-black-200').first().click();
  await page.getByRole('dialog').locator('div').filter({ hasText: 'Audi' }).nth(1).click();
});