import { test, expect } from '@playwright/test';
import { ApiClient } from '../utils/apiClient';
import { headers } from '../utils/headers';

test('Delete User API Test', async ({ request }) => {

  // Existing user ID
  const userId = 123456;

  const response = await ApiClient.delete(
    request,
    `https://gorest.co.in/public/v2/users/${userId}`,
    headers
  );

  expect(response.status()).toBe(204);

  console.log('User deleted successfully');
});