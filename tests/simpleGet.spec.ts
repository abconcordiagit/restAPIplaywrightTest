import { test, expect } from '@playwright/test';

test('GET users', async ({ request }) => {
  const response = await request.get('https://gorest.co.in/public/v2/users');
  expect(response.status()).toBe(200);
});