# Cross-Browser Test Automation for Parabol
Write a test that utilizes multiple page objects to test real-time behaviors.

Informal Test Cases Checklist: https://docs.google.com/spreadsheets/d/1fqCqV9zXq0CMnC-wA6Mjy9G1QZQw_uMMab8nNq-PoAk/edit?usp=sharing

Tests will be based on the test cases listed above, which should reflect real-time behavior of users.

Critical test cases will be covered in the test files, while the remainder will be covered if needed.

We are using Playwright for our test automation: https://playwright.dev/docs/intro

As stated in https://github.com/ParabolInc/parabol/blob/master/packages/integration-tests/README.md: We created a test automation that utilizes the POM (Page Object Model) design to test real-time behaviors of users.

## How to get the tests to work...

In order for the tests to work, you must have the dev environment set up. 
Please follow the instructions listed here: https://github.com/ParabolInc/parabol/blob/master/README.md#installation

Once you have set up your dev environment, you can use the following command to execute all tests: `npx playwright test`

If you want to execute one group of tests, then use the following command: `npx playwright test {folder-name}`

The tests will be run in a headless manner, so if you wish to see it headed, then use the following command: `npx playwright test --headed`

We do recommend to run the tests in a headless manner though.
