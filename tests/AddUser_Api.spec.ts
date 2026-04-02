
import { test, expect } from '@playwright/test';

test.describe('DummyJSON - Add User API', () => {
  const baseUrl = 'https://dummyjson.com/users/add';

  test('Add User - Request 2', async ({ request }) => {

    let response;
    try {
      response = await request.post(baseUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          firstName: 'Alice',
          lastName: 'Smith',
          age: 30,
        },
        timeout: 10000, // ✅ IMPORTANT
      });
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.firstName).toBe('Alice');
    expect(responseBody.lastName).toBe('Smith');
    expect(responseBody.age).toBe(30);
    expect(responseBody).toHaveProperty('id');
  });
});
