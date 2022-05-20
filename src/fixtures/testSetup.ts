import { test as base } from '@playwright/test';
import { inMeetingPage, orgListPage, meetingHomePage } from '@index';

type MyFixtures = {
  demoReflectPage: inMeetingPage;
  demoGroupPage: inMeetingPage;
  demoVotePage: inMeetingPage;
  demoDiscussPage: inMeetingPage;
  endDemoPage: inMeetingPage;

  upgradePlanPage: orgListPage;
  mobileUpgradePage: orgListPage;
};

export const test = base.extend<MyFixtures>({
  demoReflectPage: async ({ page }, use) => {

    const demopage = new inMeetingPage(page);
    await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
    await demopage.startDemo.click();
    await page.waitForLoadState('networkidle');
    await demopage.tipsPopup.isVisible();
    await demopage.closeTips.click();

    await use(demopage);
  },

  demoGroupPage: async ({ page }, use) => {

    const demopage = new inMeetingPage(page);
    await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
    await demopage.startDemo.click();
    await page.waitForLoadState('networkidle');
    await demopage.tipsPopup.isVisible();
    await demopage.closeTips.click();
    await demopage.nextBtn.dblclick();

    await use(demopage);
  },

  demoVotePage: async ({ page }, use) => {

    const demopage = new inMeetingPage(page);
    await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
    await demopage.startDemo.click();
    await page.waitForLoadState('networkidle');
    await demopage.tipsPopup.isVisible();
    await demopage.closeTips.click();
    await demopage.nextBtn.dblclick();
    await demopage.nextBtn.dblclick();

    await use(demopage);
  },

  demoDiscussPage: async ({ page }, use) => {

    const demopage = new inMeetingPage(page);
    await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
    await demopage.startDemo.click();
    await page.waitForLoadState('networkidle');
    await demopage.tipsPopup.isVisible();
    await demopage.closeTips.click();
    await demopage.nextBtn.dblclick();
    await demopage.nextBtn.dblclick();
    await demopage.nextBtn.dblclick();

    await use(demopage);
  },

  // For Desktop
  upgradePlanPage: async ({ page }, use) => {
    const orglistpage = new orgListPage(page);
    await page.goto('/me/organizations');
    await orglistpage.upgradeToPro.click();

    await use(orglistpage);
  },

  mobileUpgradePage: async ({ page }, use) => {
    const orglistpage = new orgListPage(page);
    const homePage = new meetingHomePage(page);
    await page.goto('/me/organizations');
    await homePage.mobileUpgrade.click();
    await orglistpage.upgradeToPro.isVisible();
    await orglistpage.upgradeToPro.click();
    await page.waitForLoadState('networkidle');

    await use(orglistpage);
  },
});

export { expect } from '@playwright/test';
    