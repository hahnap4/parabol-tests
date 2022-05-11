import { test, expect } from '@playwright/test';
import { meetingHomePage } from '../../../objects/meetingsHome';
import { createMeetingPage } from '../../../objects/createMeeting';
import { orgListPage } from '../../../objects/orgList';

// On Android

test.use({ storageState: 'storageState.json' });
test.describe.parallel('Current visual snapshot matches original snapshot', () => {

   test('For Meetings Homepage', async ({ page }) => {
     const homePage = new meetingHomePage(page);
     await page.goto('/meetings');
     await homePage.mobileHamburger.press('Enter');
     await page.waitForLoadState('networkidle');
     expect(await page.screenshot()).toMatchSnapshot('meetingsHome.png');
   });
   
   test('For My Tasks Webpage', async ({ page }) => {
    const homePage = new meetingHomePage(page);
    await page.goto('/me/tasks');
    await homePage.mobileHamburger.press('Enter');
    await page.waitForLoadState('networkidle');
    expect(await page.screenshot()).toMatchSnapshot('myTasks.png');
   });

   test('For Team Tasks Webpage', async ({ page }) => {
    const homePage = new meetingHomePage(page);
    await page.goto('/');
    await homePage.teamSide.click();
    await page.waitForLoadState('networkidle');
    expect(await page.screenshot()).toMatchSnapshot('teamTasks.png');
   });

   test('For Add a Team Webpage', async ({ page }) => {
    const homePage = new meetingHomePage(page);
    await page.goto('/newteam/1');
    await homePage.mobileHamburger.press('Enter');
    await page.waitForLoadState('networkidle');
    expect(await page.screenshot()).toMatchSnapshot('addTeam.png');
   });

   test('For User Profile Webpage', async ({ page }) => {
    const homePage = new meetingHomePage(page);
    await page.goto('/me/profile');
    await homePage.mobileHamburger.press('Enter');
    await page.waitForLoadState('networkidle');
    expect(await page.screenshot()).toMatchSnapshot('userProfile.png');
   });

   test('For Organization List Webpage', async ({ page }) => {
    const homePage = new meetingHomePage(page);
    await page.goto('/');
    await homePage.mobileUpgrade.click();
    await page.waitForLoadState('networkidle');
    expect(await page.screenshot()).toMatchSnapshot('orgList.png');
   });

   test('For Creating Sprint Poker Meeting Webpage', async ({ page }) => {
    const homePage = new meetingHomePage(page);
    await page.goto('/');
    await homePage.meetingsSide.click();
    await homePage.addMeeting.click();
    await page.waitForLoadState('networkidle');
    expect(await page.screenshot()).toMatchSnapshot('sprintPoker.png');
   });

   test('For Creating Retro Meeting Webpage', async ({ page }) => {
    const homePage = new meetingHomePage(page);
    const createmeetingPage = new createMeetingPage(page);
    await page.goto('/');
    await homePage.meetingsSide.click();
    await homePage.addMeeting.click();
    await createmeetingPage.rightButton.click();
    await page.waitForLoadState('networkidle');
    expect(await page.screenshot()).toMatchSnapshot('retro.png');
   });

   test('For Creating Check-In Meeting Webpage', async ({ page }) => {
    const homePage = new meetingHomePage(page);
    const createmeetingPage = new createMeetingPage(page);
    await page.goto('/');
    await homePage.meetingsSide.click();
    await homePage.addMeeting.click();
    await createmeetingPage.leftButton.click();
    await page.waitForLoadState('networkidle');
    expect(await page.screenshot()).toMatchSnapshot('checkin.png');
   });

});

/* Potential TODO:
 - Sprint Poker Meeting Page
 - Retro Meeting Page
 - Check-In Meeting Page
 - Demo Page

 Cannot Do:
 - Timeline (due to time changes)
 - Upgrade to Pro (due to changing quotes)

 for the visual comparisons test (aka UI tests).*/