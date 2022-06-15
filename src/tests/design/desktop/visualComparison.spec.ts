import { 
  Actor, test, expect, BrowseTheWeb, GoToMeetingsHomepage, GoToMyTasksPage, 
  GoToMyTeamTasksPage, GoToAddATeamPage, GoToMyProfilePage, GoToOrgListPage,
  Wait, GoToSprintPokerMeetingCreationPage, GoToRetroMeetingCreationPage,
  GoToCheckInMeetingSetupPage, GoToTimelinePage, 
  GoToUpgradeToProPage, sideQuoteBox, daysAgo, quoteBox
} from '@index';

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
    
    await actor.attemptsTo(GoToSprintPokerMeetingCreationPage.onApp());

    expect(await page.screenshot()).toMatchSnapshot('sprintPoker.png');
   });

   test('Retro Meeting Creation Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));
    
    await actor.attemptsTo(GoToRetroMeetingCreationPage.onApp());

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