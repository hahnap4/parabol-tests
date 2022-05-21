import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  reporter: [ ['html', { open: 'never' }] ], 
  retries: 3, //process.env.CI ? 3 : 0, // TODO: Remove '3, //' when test automation is ready.
  globalSetup: require.resolve('./globalSetup'),
  globalTeardown: './globalTeardown.ts',
  fullyParallel: true,
  use: {
    trace: 'retain-on-failure', 
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true, 
    baseURL: 'https://action.parabol.co/', //https://action-staging.parabol.co/
  }, 
  projects: [
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome']
      },
      testIgnore: ['**/design/mobile/**', '**/smoke/mobile/**'],
    },
    {
      name: 'Edge',
      use: {
          ...devices['Desktop Edge']
      },
      testIgnore: ['**/design/desktop/**', '**/design/mobile/**', '**/smoke/mobile/**'],
    },
    {
        name: 'Android v8.0.0',
        use: {
          ...devices['Galaxy S9+']
        },
        testIgnore: ['**/design/desktop/**', '**/smoke/desktop/**'],
    },
  ],
};

export default config;