import { APIRequestContext, expect } from '@playwright/test';

export class ApiClient {

  static async get(
    request: APIRequestContext,
    url: string,
    headers: any
  ) {
    return await request.get(url, { headers });
  }

  static async post(
    request: APIRequestContext,
    url: string,
    headers: any,
    body: any
  ) {
    return await request.post(url, {
      headers,
      data: body
    });
  }

  static async put(
    request: APIRequestContext,
    url: string,
    headers: any,
    body: any
  ) {
    return await request.put(url, {
      headers,
      data: body
    });
  }

  static async delete(
    request: APIRequestContext,
    url: string,
    headers: any
  ) {
    return await request.delete(url, { headers });
  }
}