import { test, expect } from '@playwright/test';

test('Simple POST API Test', async ({ request }) => {

  // Request body
  const requestBody = {
    name: 'Alex1 Mercer',
    email: 'alex1@example.com'
  };

  // Send POST request
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/users',
    {
      data: requestBody
    }
  );

  // Validate status code
  expect(response.status()).toBe(201);

  // Convert response to JSON
  const responseBody = await response.json();

  // Validate response data
  expect(responseBody.name).toBe(requestBody.name);
  expect(responseBody.email).toBe(requestBody.email);

  // Print response
  console.log(responseBody);

});