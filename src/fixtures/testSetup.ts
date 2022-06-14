import { test as base, Page } from '@playwright/test';
import { 
  Actor, StartDemoReflectStage, BrowseTheWeb, StartDemoGroupCardsStage,
  StartDemoVotingStage, StartDemoDiscussionStage, GoToUpgradeToProPage,
  GoToUpgradeToProPageOnMobile
} from '@index';

type MyFixtures = {
  demoReflectPage: Page;
  demoGroupPage: Page;
  demoVotePage: Page;
  demoDiscussPage: Page;
  endDemoPage: Page;

  upgradePlanPage: Page;
  mobileUpgradePage: Page;
};

export const test = base.extend<MyFixtures>({
  demoReflectPage: async ({ page }, use) => {
    const actor = Actor.named('Deemo')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(StartDemoReflectStage.toApp());
  },

  demoGroupPage: async ({ page }, use) => {
    const actor = Actor.named('Deemo')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(StartDemoGroupCardsStage.toApp());
  },

  demoVotePage: async ({ page }, use) => {
    const actor = Actor.named('Deemo')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(StartDemoVotingStage.toApp());
  },

  demoDiscussPage: async ({ page }, use) => {
    const actor = Actor.named('Deemo')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(StartDemoDiscussionStage.toApp());
  },

  // For Desktop
  upgradePlanPage: async ({ page }, use) => {
    const actor = Actor.named('Robert')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(GoToUpgradeToProPage.onApp());
  },

  mobileUpgradePage: async ({ page }, use) => {
    const actor = Actor.named('Robert')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(GoToUpgradeToProPageOnMobile.onApp());
  },
});

export { expect } from '@playwright/test';
    