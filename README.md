# Cross-Browser Test Automation for Parabol

This test automation will cover some or most of the checklist items for the Release tests. 

In other words, it will be focused on covering the smoke tests. If the situation arises, we may create test automation for partial regression.

The only tests we cannot cover are:

 - Added Slack, verified meeting notifications (use #t_product_actiontime)
 - Added Mattermost, verified meeting notifications (check the test webhook in Parabol Mattermost)
 - Added GitHub, verified issue created (use ParabolInc/publictestrepo)
 - Added Jira, verified issue created (use parabol-2)

---
## Type of Browser-Level Tests:

1. Smoke Tests
3. Accessibility and Performance Audit Tests

## How to Run Browser-Level Tests:

1. Go into the directory where you keep all your repos.
    - If you don't have such a directory, run the following commands in your terminal.
        1. `mkdir repos` (Creates a directory called `repos`)
        2. `cd repos` (Goes into the `repos` directory)
2. In your terminal, run: `git clone git@github.com:hahnap4/parabol-tests.git`
3. Then run: `cd parabol-tests`
4. Install dependencies: `npm ci`
5. Create your own .env file and fill it out, according to what it says in the .env.example file.
5. Once you have everything installed and filled out the .env file, you can run the tests.

6. If the Playwright tests aren't running, even after running `npm ci`, then run the following line:

`npx playwright install`

7. To execute all tests: `npx playwright test`
8. To execute all smoke tests: `npx playwright test --grep @smoke `
9. To execute smoke tests in a single test file: `npx playwright test {file path} --grep @smoke`
10. To execute smoke tests in a folder: `npx playwright test {folder path} --grep @smoke`
11. To execute all tests in a folder: `npx playwright test {folder path}`
12. To execute all tests in a single file: `npx playwright test {file path}`
13. To see all tests being run headed: `npx playwright test --headed`

_NOTE: We do recommend that you run the tests in a headless manner for faster execution time._

---
## Label Triggered Test Runs

Tests (and the audit) can run, based on the PR label.

Here is everything you need to know about running tests via adding the label to your PR:

1. You cannot run multiple label-triggered test suites at the same time. This will cause all of them, except for one, to be skipped/canceled instead. You can try to run them simultaneously by adding all of the labels to the PR, but please understand that there is a high chance of a few test suites potentially skipping/canceling, due to this issue.
2. It will be best practice to run a test suite by adding only ONE label to the PR -- until that test suite finishes running.
3. After a test suite finishes running, you can then add a new label to the PR to trigger a different test suite to run.
4. You can check the results of all test runs in GitHub Actions tab.
5. Even if you remove a label midway (of its test run) from the multiple labels that you added, that test run will continue to run, but instead, it won't affect the PR's ability to be approved and merged.
6. However, if you only have one label and then remove it at the end of its run, the test results will still affect the PR.

There are 2 new labels:

`run smoke test suite`
`run audit`

Choosing the first label will only run the smoke tests (and no other tests). Choosing the second label will only run the Lighthouse audit.

---

### Other Relevant Resources for Playwright Tests:

We need to keep in mind that Playwright can emulate mobile devices, but there will still be certain restrictions. 

Read more about that here: https://playwright.dev/docs/emulation

We are using Playwright for our test automation: https://playwright.dev/docs/intro

As stated in https://github.com/ParabolInc/parabol/blob/master/packages/integration-tests/README.md: We will create test automation that utilizes the Screenplay pattern, instead of POM (Page Object Model) design, to test real-time behavior of users.

Here are some examples of the design patterns used:
https://medium.com/tech-tajawal/page-object-model-pom-design-pattern-f9588630800b and
https://medium.com/testvagrant/screenplay-pattern-3490c7f0c23c
