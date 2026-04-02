
import { test, expect } from '@playwright/test';

test.describe('JSONPlaceholder Create Post API', () => {

  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  test('Create Post - Request 1', async ({ request }) => {
    const response = await request.post(baseUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        title: 'My Demo',
        body: 'This is a test API',
        userId: 1,
      },
    });

    // ✅ Status code validation
    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    // ✅ Response body validations
    expect(responseBody.title).toBe('My Demo');
    expect(responseBody.body).toBe('This is a test API');
    expect(responseBody.userId).toBe(1);
    expect(responseBody).toHaveProperty('id');
  });

  test('Create Post - Request 2', async ({ request }) => {
    const response = await request.post(baseUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        title: 'Second Request',
        body: 'Testing again',
        userId: 2,
      },
    });

    // ✅ Status code validation
    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    // ✅ Response body validations
    expect(responseBody.title).toBe('Second Request');
    expect(responseBody.body).toBe('Testing again');
    expect(responseBody.userId).toBe(2);
    expect(responseBody).toHaveProperty('id');
  });

});
