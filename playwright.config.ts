import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 30000,

  retries: 1,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: 'https://gorest.co.in/public/v2'
  }

});