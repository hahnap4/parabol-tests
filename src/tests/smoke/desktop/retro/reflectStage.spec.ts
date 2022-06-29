import { test, expect } from '@playwright/test';
import { Actor, BrowseTheWeb, meetingName } from '@index';
import { LogInAsUserOne } from '@web/tasks/auth/signIn/logInAsUserOne.task';
import { LogInAsUserTwo } from '@web/tasks/auth/signIn/logInAsUserTwo.task';
import { GoToRetroMeetingSetupPage } from '@web/tasks/goToPages/desktop/goToRetroMeetingSetupPage.task';
import { MakeRetroMeeting } from '@web/tasks/retro/desktop/makeRetroMeeting.task';
import { EnterRetroMeeting } from '../../../../screenplay/web/tasks/retro/desktop/enterRetroMeeting.task';

const { devices } = require('@playwright/test');

// Interact with contexts independently
test('2 Users Add Reflections', async({ page }) => {

// Create a browser instance 
const browser = devices.launch();

// Create two isolated browser contexts
const robertContext = browser.newContext();
const lisaContext = browser.newContext();

// Create two pages
const robertPage = robertContext.newPage();
const lisaPage = lisaContext.newPage();
    
    const Robert = Actor.named('Robert')
        .can(BrowseTheWeb.using(robertPage));

    await Robert.attemptsTo(
        LogInAsUserOne.inApp(),
        GoToRetroMeetingSetupPage.onApp(),
        MakeRetroMeeting.inApp()
        );

    const Lisa = Actor.named('Lisa')
        .can(BrowseTheWeb.using(lisaPage));

    await Lisa.attemptsTo(
        LogInAsUserTwo.inApp(),
        EnterRetroMeeting.inApp()
        );

    await expect.soft(lisaPage.meetingName).toContainText('Retro');
    
});


/*
Robert and Lisa:
1. Fill out the reflections in the Start, Stop, and Continue Columns.
2. Expect to count 12 of the selectors. (hard check)

Robert:
1. Click on End Meeting button twice.
2. Create a loop: Go to Timeline Page. Click on Triple Dot. Click on "Archive Meeting" until you cannot find any triple dots.
3. Teardown complete.

*/



/* 
TODO: Test the Retro meeting with 2 players.
 - Create 2 isolated browser contexts.
 - Create pages and interact with the contexts independently.

Requires: 
 - inMeeting objects
 - authPage objects
 - addTeam objects
 - createMeeting objects
 - meetingsHome objects
 - teamDashboard objects
 - myTasks objects
 - timeline objects
 - create globalsetup for second player login for another storageState
 - Add second player to the same team as the main first player
 - fixture for setting up retro meeting, signing in as both players, and joining the meeting 
 - teardown fixture for ending meeting, cleaning up timeline webpage, and signing out
*/