import { 
  Actor, test, expect, BrowseTheWeb, daysAgo, quoteBox, GoToUpgradeToProPageOnMobile,
  GoToAddATeamOnMobile, GoToCheckInSetupOnMobile, GoToMeetingsHomepageOnMobile,
  GoToMyProfileOnMobile, GoToMyTasksOnMobile, GoToMyTeamTasksOnMobile, 
  GoToOrgListOnMobile, GoToRetroSetupOnMobile, GoToSprintPokerSetupOnMobile,
  GoToTimelineOnMobile
} from '@index';

// On Android

test.use({ storageState: 'prodStorageState.json' });
test.describe.parallel('Mobile UI Test', () => {

   test('Meetings Homepage', async ({ page }) => {
    const actor = Actor.named('Picasso')
        .can(BrowseTheWeb.using(page));

     await actor.attemptsTo(GoToMeetingsHomepageOnMobile.onApp());

     expect(await page.screenshot()).toMatchSnapshot('meetingsHome.png');
   });
   
   test('My Tasks Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(GoToMyTasksOnMobile.onApp());

    expect(await page.screenshot()).toMatchSnapshot('myTasks.png');
   });

   test('Team Tasks Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(GoToMyTeamTasksOnMobile.onApp());

    expect(await page.screenshot()).toMatchSnapshot('teamTasks.png');
   });

   test('Add a Team Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(GoToAddATeamOnMobile.onApp());

    expect(await page.screenshot()).toMatchSnapshot('addTeam.png');
   });

   test('My Profile Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(GoToMyProfileOnMobile.onApp());

    expect(await page.screenshot()).toMatchSnapshot('userProfile.png');
   });

   test('Organization List Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(GoToOrgListOnMobile.onApp());

    expect(await page.screenshot()).toMatchSnapshot('orgList.png');
   });

   test('Sprint Poker Meeting Setup Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(GoToSprintPokerSetupOnMobile.onApp());

    expect(await page.screenshot()).toMatchSnapshot('sprintPoker.png');
   });

   test('Retro Meeting Setup Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(GoToRetroSetupOnMobile.onApp());

    expect(await page.screenshot()).toMatchSnapshot('retro.png');
   });

   test('Check-In Meeting Setup Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(GoToCheckInSetupOnMobile.onApp());

    expect(await page.screenshot()).toMatchSnapshot('checkin.png');
   });

   test('Timeline Page', async ({ page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(GoToTimelineOnMobile.onApp());

    /* This covers up the Days Ago Statement so that it does not fail the 
    visual comparison test. */
    const daysAgoStatement = await page.locator(daysAgo);
    const maskedScreenshot = await page.screenshot(
      {
        mask: [daysAgoStatement]
      });

    expect(await maskedScreenshot).toMatchSnapshot('timeline.png');
   });

   test('For Upgrade to Pro Webpage', async ({ mobileUpgradePage, page }) => {
    const actor = Actor.named('Picasso')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(GoToUpgradeToProPageOnMobile.onApp());

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