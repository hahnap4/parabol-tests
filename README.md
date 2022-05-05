# Cross-Browser Test Automation for Parabol

Based on the following: https://github.com/ParabolInc/parabol/issues/6466 and https://github.com/ParabolInc/parabol/blob/master/docs/manualTestingGuide.md

This test automation will cover most of the checklist items for Release and UI tests. 

In other words, it will be focused on covering the smoke tests. If time permits, we may create test automation for partial regression.

The only tests we cannot cover are:

 - Added Slack, verified meeting notifications (use #t_product_actiontime)
 - Added Mattermost, verified meeting notifications (check the test webhook in Parabol Mattermost)
 - Added GitHub, verified issue created (use ParabolInc/publictestrepo)
 - Added Jira, verified issue created (use parabol-2)

We also need to keep in mind that Playwright can emulate mobile devices, but there will still be certain restrictions. 

Read more about that here: https://playwright.dev/docs/emulation

We are using Playwright for our test automation: https://playwright.dev/docs/intro

As stated in https://github.com/ParabolInc/parabol/blob/master/packages/integration-tests/README.md: We will create test automation that utilizes the POM (Page Object Model) design to test real-time behavior of users.

## How to get the tests to work...

1. Go into the directory where you keep your repos.
2. In your terminal, run: `git clone git@github.com:hahnap4/parabol-tests.git`
3. Then run: `cd parabol-tests`
4. Install Playwright: `npm i -D @playwright/test` and `npx playwright install`
5. Once you have that installed, you can run the tests.

**How to run the tests?**

Run `npx playwright test` to execute all tests headlessly.

If you want to execute one group of tests, then use the following command: `npx playwright test {folder-name}`

If you wish to see the tests run headed, then run: `npx playwright test --headed`

We do recommend to run the tests in a headless manner though.
