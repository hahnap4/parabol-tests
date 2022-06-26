import { PlaywrightTestConfig, devices } from '@playwright/test';

require('dotenv').config();

const base_url = process.env.BASE_URL;

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  reporter: [ ['html', { open: 'never' }] ], 
  retries: process.env.CI ? 2 : 0, 
  globalSetup: require.resolve('./globalSetup'), // Uncomment if creating a new Login storageState.
  globalTeardown: './globalTeardown.ts',
  fullyParallel: true,
  timeout: 60000,
  expect: {
    timeout: 10000,
  },
  use: {
    actionTimeout: 12000,
    navigationTimeout: 15000,
    trace: 'retain-on-failure', 
    screenshot: 'only-on-failure',
    video: 'on',
    headless: true, 
    // @ts-ignore
    baseURL: base_url,
    launchOptions: {
      // force-enable GPU hardware acceleration (even in headless mode)
      // "--use-gl=desktop" OR "--use-gl=egl"
      args: ["--use-gl=desktop"]
    }
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