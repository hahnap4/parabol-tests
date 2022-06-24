import { 
  Actor, BrowseTheWeb, daysAgo, quoteBox, Wait
} from '@index';
import { test, expect } from '@playwright/test';
import { GoToMeetingsHomepageOnMobile } from '@web/tasks/goToPages/mobile/goToMeetingsHomepageOnMobile.task';
import { GoToMyTasksOnMobile } from '@web/tasks/goToPages/mobile/goToMyTasksOnMobile.task';
import { GoToMyTeamTasksOnMobile } from '@web/tasks/goToPages/mobile/goToMyTeamTasksOnMobile.task';
import { GoToAddATeamOnMobile } from '@web/tasks/goToPages/mobile/goToAddATeamOnMobile.task';
import { GoToMyProfileOnMobile } from '@web/tasks/goToPages/mobile/goToMyProfileOnMobile.task';
import { GoToOrgListOnMobile } from '@web/tasks/goToPages/mobile/goToOrgListOnMobile.task';
import { GoToSprintPokerSetupOnMobile } from '@web/tasks/goToPages/mobile/goToSprintPokerSetupOnMobile.task';
import { GoToRetroSetupOnMobile } from '@web/tasks/goToPages/mobile/goToRetroSetupOnMobile.task';
import { GoToCheckInSetupOnMobile } from '@web/tasks/goToPages/mobile/goToCheckInSetupOnMobile.task';
import { GoToTimelineOnMobile } from '@web/tasks/goToPages/mobile/GoToTimelineOnMobile.task';
import { GoToUpgradeToProPageOnMobile } from '@web/tasks/goToPages/mobile/GoToUpgradeToProPageOnMobile.task';
import { LogInAsUserOne } from '../../../screenplay/web/tasks/auth/signIn/logInAsUserOne.task';

// On Android

// test.use({ storageState: 'storageState.json' });
// TODO: Figure out what's wrong with storageState.
test.describe.parallel('Mobile UI Test', () => {

   test('Meetings Homepage', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));

     await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('domcontentloaded'),
      GoToMeetingsHomepageOnMobile.onApp()
      );

     expect(await page.screenshot()).toMatchSnapshot('meetingsHome.png');
   });
   
   test('My Tasks Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('domcontentloaded'),
      GoToMyTasksOnMobile.onApp()
      );

    expect(await page.screenshot()).toMatchSnapshot('myTasks.png');
   });

   test('Team Tasks Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('domcontentloaded'),
      GoToMyTeamTasksOnMobile.onApp()
      );

    expect(await page.screenshot()).toMatchSnapshot('teamTasks.png');
   });

   test('Add a Team Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('domcontentloaded'),
      GoToAddATeamOnMobile.onApp()
      );

    expect(await page.screenshot()).toMatchSnapshot('addTeam.png');
   });

   test('My Profile Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('domcontentloaded'),
      GoToMyProfileOnMobile.onApp()
      );

    expect(await page.screenshot()).toMatchSnapshot('userProfile.png');
   });

   test('Organization List Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('domcontentloaded'),
      GoToOrgListOnMobile.onApp()
      );

    expect(await page.screenshot()).toMatchSnapshot('orgList.png');
   });

   test('Sprint Poker Meeting Setup Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('domcontentloaded'),
      GoToSprintPokerSetupOnMobile.onApp()
      );

    expect(await page.screenshot()).toMatchSnapshot('sprintPoker.png');
   });

   test('Retro Meeting Setup Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('domcontentloaded'),
      GoToRetroSetupOnMobile.onApp()
      );

    expect(await page.screenshot()).toMatchSnapshot('retro.png');
   });

   test('Check-In Meeting Setup Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('domcontentloaded'),
      GoToCheckInSetupOnMobile.onApp()
      );

    expect(await page.screenshot()).toMatchSnapshot('checkin.png');
   });

   test('Timeline Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('domcontentloaded'),
      GoToTimelineOnMobile.onApp()
      );

    /* This covers up the Days Ago Statement so that it does not fail the 
    visual comparison test. */
    const daysAgoStatement = await page.locator(daysAgo);
    const maskedScreenshot = await page.screenshot(
      {
        mask: [daysAgoStatement]
      });

    expect(await maskedScreenshot).toMatchSnapshot('timeline.png');
   });

   test('For Upgrade to Pro Webpage', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('domcontentloaded'),
      GoToUpgradeToProPageOnMobile.onApp()
      );

    /* This covers up the Quote so that it does not fail the visual 
    comparison test. */
    const quote = await page.locator(quoteBox);
    const maskedScreenshot = await page.screenshot(
      {
        mask: [quote]
      });
    expect(await maskedScreenshot).toMatchSnapshot('upgrade.png');
   });

});

/** Potential TODO:
* - Sprint Poker Meeting Page
* - Retro Meeting Page
* - Check-In Meeting Page
* - Demo Page
*
* for the visual comparisons test (aka UI tests).*/