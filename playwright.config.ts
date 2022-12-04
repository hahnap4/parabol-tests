import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from '@playwright/test';
import "dotenv";

const base_url = process.env.BASE_URL;

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  globalSetup: require.resolve('./src/fixtures/both-users.ts'),
  reporter: [ ['html', { open: 'on-failure' }] ], 
  retries: process.env.CI ? 2 : 0, 
  fullyParallel: true,
  timeout: process.env.CI ? 30000 : 60000, 
  expect: {
    timeout: process.env.CI ? 5000 : 15000,
  },
  use: {
    trace: 'retain-on-failure', 
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true, 
    // @ts-ignore
    baseURL: base_url,
    launchOptions: process.env.CI ? undefined : {
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
      testIgnore: ['**/design/desktop/**', '**/design/mobile/**', '**/smoke/mobile/**', '**/smoke/desktop/retro/**'],
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
