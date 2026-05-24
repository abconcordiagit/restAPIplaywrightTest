import { test, expect } from '@playwright/test';
import { ApiClient } from '../utils/apiClient';
import { headers } from '../utils/headers';
import userData from '../test-data/users.json';

test('Create User API Test', async ({ request }) => {

  const body = {
    ...userData.createUser,
    email: `alex${Date.now()}@example.com`
  };

  const response = await ApiClient.post(
    request,
    'https://gorest.co.in/public/v2/users',
    headers,
    body
  );

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  expect(responseBody.name).toBe(body.name);
  expect(responseBody.email).toBe(body.email);

  console.log(responseBody);
});