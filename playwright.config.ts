import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  reporter: [ ['html', { open: 'on-failure' }] ], // Use once all test automation has been coded.
  retries: process.env.CI ? 2 : 0, // Can do 2 retries. 
  globalSetup: require.resolve('./globalSetup'),
  globalTeardown: './globalTeardown.ts',
  use: {
    trace: 'retain-on-failure', // If first time fails, then second time will be traced
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true, // change to true once it's ready for people to use in ci/cd. headless = no browser appearing on screen
    baseURL: 'https://action-staging.parabol.co/',
  }, 
  projects: [
    {
      name: 'Safari (webkit)',
      use: {
        ...devices['Desktop Safari']
      },
      testIgnore: '**/design/**',
    },
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome']
      },
    },
  ],
};

export default config;