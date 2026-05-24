import { test, expect } from '@playwright/test';
import { ApiClient } from '../utils/apiClient';
import { headers } from '../utils/headers';

test('Get User API Test', async ({ request }) => {

  const email = 'alex.mercer.unique1@example.com';

  const response = await ApiClient.get(
    request,
    //`https://gorest.co.in/public/v2/users?email=${email}`,
    `https://gorest.co.in/public/v2/users`,
    headers
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  //expect(responseBody[0].email).toBe(email);

  console.log(responseBody);
});