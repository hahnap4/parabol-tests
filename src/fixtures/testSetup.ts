import { test as base } from '@playwright/test';
import { inMeetingPage } from '@index';

type MyFixtures = {
  demoReflectPage: inMeetingPage;
  demoGroupPage: inMeetingPage;
  demoVotePage: inMeetingPage;
  demoDiscussPage: inMeetingPage;
  endDemoPage: inMeetingPage;
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
});

export { expect } from '@playwright/test';
    