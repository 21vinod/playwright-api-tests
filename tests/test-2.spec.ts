import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('vinod');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('vinod@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.locator('app-layout-header').getByRole('link', { name: 'conduit' })).toBeVisible();
  await page.getByRole('link', { name: '  New Article' }).click();
  await page.getByRole('textbox', { name: 'Article Title' }).click();
  await page.getByRole('textbox', { name: 'Article Title' }).fill('test article');
  await page.getByRole('textbox', { name: 'Article Title' }).press('Tab');
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill('breaking news');
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).press('Tab');
  await page.getByRole('textbox', { name: 'Write your article (in' }).fill('i am learning pw with API mock');
  await page.getByRole('textbox', { name: 'Enter tags' }).click();
  await page.getByRole('textbox', { name: 'Enter tags' }).fill('pw, API');
  await page.getByRole('button', { name: 'Publish Article' }).click();
  await page.getByRole('textbox', { name: 'Write a comment...' }).click();
  await page.getByRole('textbox', { name: 'Write a comment...' }).fill('test comment');
  await page.getByRole('button', { name: 'Post Comment' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'conduit' }).click();
  await expect(page.locator('app-article-list')).toContainText('test article');
});