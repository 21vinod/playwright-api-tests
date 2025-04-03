import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
  await page.goto("https://conduit.bondaracademy.com/")
})


test('has title', async ({ page }) => {

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Conduit/);
});

