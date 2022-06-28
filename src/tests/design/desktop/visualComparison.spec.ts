import { 
  Actor, BrowseTheWeb, Wait, sideQuoteBox, daysAgo, quoteBox,
  retrospectiveDemoCard, teamFilter, agendaButton, createTeamButton,
  deleteAccountButton, addNewOrganization, startMeetingButton,
  timelineMessageBox, upgradeNowButton
} from '@index';
import { test, expect } from '@playwright/test';
import { GoToMeetingsHomepage } from '@web/tasks/goToPages/desktop/goToMeetingsHomepage.task';
import { GoToMyTasksPage } from '@web/tasks/goToPages/desktop/goToMyTasksPage.task';
import { GoToMyTeamTasksPage } from '@web/tasks/goToPages/desktop/goToMyTeamTasksPage.task';
import { GoToAddATeamPage } from '@web/tasks/goToPages/desktop/goToAddATeamPage.task';
import { GoToMyProfilePage } from '@web/tasks/goToPages/desktop/goToMyProfilePage.task';
import { GoToOrgListPage } from '@web/tasks/goToPages/desktop/goToOrgListPage.task';
import { GoToSprintPokerMeetingSetupPage } from '@web/tasks/goToPages/desktop/goToSprintPokerMeetingSetupPage.task';
import { GoToRetroMeetingSetupPage } from '@web/tasks/goToPages/desktop/goToRetroMeetingSetupPage.task';
import { GoToCheckInMeetingSetupPage } from '@web/tasks/goToPages/desktop/goToCheckInMeetingSetupPage.task';
import { GoToTimelinePage } from '@web/tasks/goToPages/desktop/goToTimelinePage.task';
import { GoToUpgradeToProPage } from '@web/tasks/goToPages/desktop/goToUpgradeToProPage.task';
import { LogInAsUserOne } from '../../../screenplay/web/tasks/auth/signIn/logInAsUserOne.task';

// On Chrome

test.describe.parallel('Desktop UI Test', () => {

   test('Meetings Homepage', async ({ page }) => {
     const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));

     await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('networkidle'),
      GoToMeetingsHomepage.onApp(),
      Wait.forLoadState('domcontentloaded'),
      Wait.forSelector(retrospectiveDemoCard),
      Wait.forLoadState('networkidle')
      );

     expect(await page.screenshot()).toMatchSnapshot('meetingsHome.png');
   });

   test('My Tasks Page', async ({ page }) => {
     const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));

     await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('networkidle'),
      GoToMyTasksPage.onApp(),
      Wait.forLoadState('domcontentloaded'),
      Wait.forSelector(teamFilter),
      Wait.forLoadState('networkidle')
      );

    expect(await page.screenshot()).toMatchSnapshot('myTasks.png');
   });

   test('My Team Tasks Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('networkidle'),
      GoToMyTeamTasksPage.onApp(),
      Wait.forLoadState('domcontentloaded'),
      Wait.forSelector(agendaButton),
      Wait.forLoadState('networkidle')
      );

    expect(await page.screenshot()).toMatchSnapshot('teamTasks.png');
   });

   test('Add a Team Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('networkidle'),
      GoToAddATeamPage.onApp(),
      Wait.forLoadState('domcontentloaded'),
      Wait.forSelector(createTeamButton),
      Wait.forLoadState('networkidle')
      );
    
    expect(await page.screenshot()).toMatchSnapshot('addTeam.png');
   });

   test('My Profile Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('networkidle'),
      GoToMyProfilePage.onApp(),
      Wait.forLoadState('domcontentloaded'),
      Wait.forSelector(deleteAccountButton),
      Wait.forLoadState('networkidle')
      );

    expect(await page.screenshot()).toMatchSnapshot('userProfile.png');
   });

   test('Organization List Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('networkidle'),
      GoToOrgListPage.onApp(),
      Wait.forLoadState('domcontentloaded'),
      Wait.forSelector(addNewOrganization),
      Wait.forLoadState('networkidle')
      );

    expect(await page.screenshot()).toMatchSnapshot('orgList.png');
   });

   test('Sprint Poker Meeting Creation Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('networkidle'),
      GoToSprintPokerMeetingSetupPage.onApp(),
      Wait.forLoadState('domcontentloaded'),
      Wait.forSelector(startMeetingButton),
      Wait.forLoadState('networkidle')
      );

    expect(await page.screenshot()).toMatchSnapshot('sprintPoker.png');
   });

   test('Retro Meeting Setup Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('networkidle'),
      GoToRetroMeetingSetupPage.onApp(),
      Wait.forLoadState('domcontentloaded'),
      Wait.forSelector(startMeetingButton),
      Wait.forLoadState('networkidle')
      );

    expect(await page.screenshot()).toMatchSnapshot('retro.png');
   });

   test('Check-In Meeting Setup Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('networkidle'),
      GoToCheckInMeetingSetupPage.onApp(),
      Wait.forLoadState('domcontentloaded'),
      Wait.forSelector(startMeetingButton),
      Wait.forLoadState('networkidle')
      );

    expect(await page.screenshot()).toMatchSnapshot('checkin.png');
   });
   
   test('Timeline Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('networkidle'),
      GoToTimelinePage.onApp(),
      Wait.forLoadState('domcontentloaded'),
      Wait.forSelector(timelineMessageBox),
      Wait.forLoadState('networkidle')
      );

    // This covers up the Side Quote and Days Ago Statement so that it 
    // does not fail the visual comparison test.
    const sideQuote = await page.locator(sideQuoteBox);
    const daysAgoStatement = await page.locator(daysAgo);
    const maskedScreenshot = await page.screenshot(
      {
        mask: [sideQuote, daysAgoStatement]
      });
      
    await actor.attemptsTo(Wait.forLoadState('networkidle'));

    expect(await maskedScreenshot).toMatchSnapshot('timeline.png');
   });

   test('Upgrade to Pro Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(
      LogInAsUserOne.inApp(),
      Wait.forLoadState('networkidle'),
      GoToUpgradeToProPage.onApp(),
      Wait.forLoadState('domcontentloaded'),
      Wait.forSelector(upgradeNowButton),
      Wait.forLoadState('networkidle')
      );
    
    // This covers up the Quote so that it does not fail the visual comparison test.
    const quote = await page.locator(quoteBox);
    const maskedScreenshot = await page.screenshot(
      {
        mask: [quote]
      });

    await actor.attemptsTo(Wait.forLoadState('networkidle'));

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