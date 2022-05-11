import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  reporter: [ ['html', { open: 'never' }] ], 
  retries: process.env.CI ? 2 : 0, // Can do 2 retries. 
  globalSetup: require.resolve('./globalSetup'),
  globalTeardown: './globalTeardown.ts',
  use: {
    trace: 'retain-on-failure', 
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true, 
    baseURL: 'https://action.parabol.co/', //https://action-staging.parabol.co/
  }, 
  projects: [
    {
      name: 'Safari (webkit)',
      use: {
        ...devices['Desktop Safari']
      },
      testIgnore: ['**/design/desktop/**', '**/design/mobile/**'],
    },
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome']
      },
      testIgnore: '**/design/mobile/**',
    },
    {
      name: 'Edge',
      use: {
          ...devices['Desktop Edge']
      },
      testIgnore: ['**/design/desktop/**', '**/design/mobile/**'],
    },
    {
        name: 'Firefox',
        use: {
            ...devices['Desktop Firefox']
        },
        testIgnore: ['**/design/desktop/**', '**/design/mobile/**'],
      },
    {
        name: 'Android v8.0.0',
        use: {
          ...devices['Galaxy S9+']
        },
        testIgnore: '**/design/desktop/**',
    },
    {
        name: 'iOS v15.4.1',
        use: {
          ...devices['iPhone 13 Pro Max']
        },
        testIgnore: ['**/design/desktop/**', '**/design/mobile/**'],
    },
  ],
};

export default config;