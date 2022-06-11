import { test as base } from '@playwright/test';
import { generalInMeetingPage, demoSpecificRetroPage, orgListPage, sideNavPage } from '@index';

type MyFixtures = {
  demoReflectPage: generalInMeetingPage;
  demoGroupPage: generalInMeetingPage;
  demoVotePage: generalInMeetingPage;
  demoDiscussPage: generalInMeetingPage;
  endDemoPage: generalInMeetingPage;

  upgradePlanPage: orgListPage;
  mobileUpgradePage: orgListPage;
};

export const test = base.extend<MyFixtures>({
  demoReflectPage: async ({ page }, use) => {

    const general = new generalInMeetingPage(page);
    const demoRetro = new demoSpecificRetroPage(page);
    await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
    await demoRetro.startDemo.click();
    await page.waitForLoadState('networkidle');
    await general.tipsPopup.isVisible();
    await general.closeTips.click();

    await use(general);
  },

  demoGroupPage: async ({ page }, use) => {

    const general = new generalInMeetingPage(page);
    const demoRetro = new demoSpecificRetroPage(page);
    await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
    await demoRetro.startDemo.click();
    await page.waitForLoadState('networkidle');
    await general.tipsPopup.isVisible();
    await general.closeTips.click();
    await general.nextBtn.dblclick();

    await use(general);
  },

  demoVotePage: async ({ page }, use) => {

    const general = new generalInMeetingPage(page);
    const demoRetro = new demoSpecificRetroPage(page);
    await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
    await demoRetro.startDemo.click();
    await page.waitForLoadState('networkidle');
    await general.tipsPopup.isVisible();
    await general.closeTips.click();
    await general.nextBtn.dblclick();
    await general.nextBtn.dblclick();

    await use(general);
  },

  demoDiscussPage: async ({ page }, use) => {

    const general = new generalInMeetingPage(page);
    const demoRetro = new demoSpecificRetroPage(page);
    await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
    await demoRetro.startDemo.click();
    await page.waitForLoadState('networkidle');
    await general.tipsPopup.isVisible();
    await general.closeTips.click();
    await general.nextBtn.dblclick();
    await general.nextBtn.dblclick();
    await general.nextBtn.dblclick();

    await use(general);
  },

  // For Desktop
  upgradePlanPage: async ({ page }, use) => {
    const orgList = new orgListPage(page);
    await page.goto('/me/organizations');
    await orgList.upgradeToPro.click();

    await use(orgList);
  },

  mobileUpgradePage: async ({ page }, use) => {
    const orgList = new orgListPage(page);
    const sideNav = new sideNavPage(page);
    await page.goto('/me/organizations');
    await sideNav.mobileUpgrade.click();
    await orgList.upgradeToPro.isVisible();
    await orgList.upgradeToPro.click();
    await page.waitForLoadState('networkidle');

    await use(orgList);
  },
});

export { expect } from '@playwright/test';
    