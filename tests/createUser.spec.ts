import { test, expect } from '@playwright/test';
import { ApiClient } from '../utils/apiClient';
import { getHeaders } from '../utils/headers';
import userData from '../test-data/users.json';

test('Create User API Test', async ({ request }) => {

  // 🔍 Debug: verify token is coming from GitHub Actions
  console.log("TOKEN LENGTH =", process.env.GOREST_TOKEN?.length);

  const body = {
    ...userData.createUser,
    email: `alex${Date.now()}@example.com`
  };

  const response = await ApiClient.post(
    request,
    'https://gorest.co.in/public/v2/users',
    getHeaders(),
    body
  );

  // 🔥 Status validation
  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  // 🔥 Response validation
  expect(responseBody.name).toBe(body.name);
  expect(responseBody.email).toBe(body.email);

  // 🔍 Debug response (safe)
  console.log("Created User ID =", responseBody.id);
});