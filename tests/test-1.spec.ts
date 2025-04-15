import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
});

test('Intercept network request', async ({ page }) => {
  await page.route('**/api/data', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ message: 'Mocked Response' }),
    });
  });

  await page.goto('https://example.com');
});
