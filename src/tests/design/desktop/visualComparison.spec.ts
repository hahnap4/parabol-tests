import { 
  Actor, test, expect, BrowseTheWeb, Wait, sideQuoteBox, daysAgo, quoteBox
} from '@index';
import { GoToMeetingsHomepage } from '@tasks/goToPages/desktop/goToMeetingsHomepage.task';
import { GoToMyTasksPage } from '@tasks/goToPages/desktop/goToMyTasksPage.task';
import { GoToMyTeamTasksPage } from '@tasks/goToPages/desktop/goToMyTeamTasksPage.task';
import { GoToAddATeamPage } from '@tasks/goToPages/desktop/goToAddATeamPage.task';
import { GoToMyProfilePage } from '@tasks/goToPages/desktop/goToMyProfilePage.task';
import { GoToOrgListPage } from '@tasks/goToPages/desktop/goToOrgListPage.task';
import { GoToSprintPokerMeetingSetupPage } from '@tasks/goToPages/desktop/goToSprintPokerMeetingSetupPage.task';
import { GoToRetroMeetingSetupPage } from '@tasks/goToPages/desktop/goToRetroMeetingSetupPage.task';
import { GoToCheckInMeetingSetupPage } from '@tasks/goToPages/desktop/goToCheckInMeetingSetupPage.task';
import { GoToTimelinePage } from '@tasks/goToPages/desktop/goToTimelinePage.task';
import { GoToUpgradeToProPage } from '@tasks/goToPages/desktop/goToUpgradeToProPage.task';

// On Chrome

test.use({ storageState: 'prodStorageState.json' });
test.describe.parallel('Desktop UI Test', () => {

   test('Meetings Homepage', async ({ page }) => {
     const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));

     await actor.attemptsTo(GoToMeetingsHomepage.onApp());

     expect(await page.screenshot()).toMatchSnapshot('meetingsHome.png');
   });

   test('My Tasks Page', async ({ page }) => {
     const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));

     await actor.attemptsTo(GoToMyTasksPage.onApp());

    expect(await page.screenshot()).toMatchSnapshot('myTasks.png');
   });

   test('My Team Tasks Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(GoToMyTeamTasksPage.onApp());

    expect(await page.screenshot()).toMatchSnapshot('teamTasks.png');
   });

   test('Add a Team Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(GoToAddATeamPage.onApp());
    
    expect(await page.screenshot()).toMatchSnapshot('addTeam.png');
   });

   test('My Profile Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(GoToMyProfilePage.onApp());

    expect(await page.screenshot()).toMatchSnapshot('userProfile.png');
   });

   test('Organization List Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(GoToOrgListPage.onApp());

    expect(await page.screenshot()).toMatchSnapshot('orgList.png');
   });

   test('Sprint Poker Meeting Creation Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(GoToSprintPokerMeetingSetupPage.onApp());

    expect(await page.screenshot()).toMatchSnapshot('sprintPoker.png');
   });

   test('Retro Meeting Creation Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(GoToRetroMeetingSetupPage.onApp());

    expect(await page.screenshot()).toMatchSnapshot('retro.png');
   });

   test('Check-In Meeting Creation Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(GoToCheckInMeetingSetupPage.onApp());

    expect(await page.screenshot()).toMatchSnapshot('checkin.png');
   });
   
   test('Timeline Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(GoToTimelinePage.onApp());

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
    
    await actor.attemptsTo(GoToUpgradeToProPage.onApp());
    
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