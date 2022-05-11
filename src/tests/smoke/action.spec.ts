import { test, expect } from '@playwright/test';

// On Android

test.use({ storageState: 'storageState.json' });
test.describe.parallel('Current visual snapshot matches original snapshot', () => {

   test('For Meetings Homepage', async ({ page }) => {
     await page.goto('/meetings');
     await page.locator('button:has-text("menu")').press('Enter');
     await page.waitForLoadState('networkidle');
     await page.pause();
    });

});

/* 
TODO: Test the Action meeting aka Check-in Meeting with 2 players.
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
 - fixture for setting up check-in meeting, signing in as both players, creating new tasks, creating agenda items, and joining the meeting 
 - teardown fixture for ending meeting, cleaning up timeline webpage, unarchiving tasks, remove certain tasks, removing agenda items, and signing out
*/