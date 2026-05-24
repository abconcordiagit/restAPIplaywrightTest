import { test, expect } from '@playwright/test';
import { ApiClient } from '../utils/apiClient';
import { headers } from '../utils/headers';
import userData from '../test-data/users.json';

test('Update User API Test', async ({ request }) => {

  // Existing user ID
  const userId = 8476879;

  const response = await ApiClient.put(
    request,
    `https://gorest.co.in/public/v2/users/${userId}`,
    headers,
    userData.updateUser
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.name)
    .toBe(userData.updateUser.name);

  expect(responseBody.email)
    .toBe(userData.updateUser.email);

  console.log(responseBody);
});