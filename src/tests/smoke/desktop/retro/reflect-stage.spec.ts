//
import { test, expect, chromium } from '@playwright/test';
import 'dotenv/config';
import { randomStatement } from '@data/test_data.json';
import { blankIcebreakerCheckbox, includeIcebreakerCheckbox, selectAnotherTemplate } from '@pages/setup-meeting/setup-meeting-setting-widget';
import { endMeetingButton } from '@pages/in-meeting/general/general-in-meeting';
import { startField, firstReflectionBox, stopField, secondReflectionBox, continueField, thirdReflectionBox } from '@pages/in-meeting/retro/desktop-specific-reflect-stage';
import { activeMeetingBox, addMeetingButton } from '@pages/meetings-homepage/meetings-homepage';
import { nextMeetingTypeButton, startMeetingButton } from '@pages/setup-meeting/general-setup-meeting';
import { useTemplateButton } from '@pages/setup-meeting/general-templates-popup';
import { startStopContinueTemplate } from '@pages/setup-meeting/retro-templates';
import { tripleDotForMessage, archiveMeeting } from '@pages/timeline/meeting-summary';

const baseURL = process.env.BASE_URL;

test('2 Users Add Reflections', async() => {

try {
    
    const browser = await chromium.launch();

    const userOneContext = await browser.newContext({ storageState: './src/fixtures/storageState/firstUser.json'});
    const userTwoContext = await browser.newContext({ storageState: './src/fixtures/storageState/secondUser.json'});

    const userOnePage = await userOneContext.newPage();
    const userTwoPage = await userTwoContext.newPage();

    // User One Scenario
    await userOnePage.goto(`${baseURL}/meetings`);
    userOnePage.click(addMeetingButton);
    userOnePage.click(nextMeetingTypeButton);
    userOnePage.waitForLoadState('networkidle');

    let hiddenBlankCheckbox = await userOnePage.isHidden(blankIcebreakerCheckbox);
    if ( hiddenBlankCheckbox === true ) {
        await userOnePage.click(includeIcebreakerCheckbox);
        userOnePage.waitForLoadState('networkidle');
    }

    let hiddenTemplate = await userOnePage.isHidden(startStopContinueTemplate);
    if ( hiddenTemplate === true ) {
        await userOnePage.click(selectAnotherTemplate);
        userOnePage.click(startStopContinueTemplate);
        userOnePage.click(useTemplateButton);
    }

    await userOnePage.click(startMeetingButton);
    userOnePage.waitForLoadState('networkidle');
        
    // User Two Scenario
    await userTwoPage.goto(`${baseURL}/meetings`);
    userTwoPage.click(activeMeetingBox);

    await userTwoPage.click(startField);
    userTwoPage.fill(startField, randomStatement);
    userTwoPage.waitForLoadState('networkidle');
    userTwoPage.keyboard.press('Enter');
    userTwoPage.keyboard.press('Enter');
    userTwoPage.waitForSelector(firstReflectionBox);

    await userTwoPage.click(stopField);
    userTwoPage.fill(stopField, randomStatement);
    userTwoPage.waitForLoadState('networkidle');
    userTwoPage.keyboard.press('Enter');
    userTwoPage.keyboard.press('Enter');
    userTwoPage.waitForSelector(secondReflectionBox);

    await userTwoPage.click(continueField);
    userTwoPage.fill(continueField, randomStatement);
    userTwoPage.waitForLoadState('networkidle');
    userTwoPage.keyboard.press('Enter');
    userTwoPage.keyboard.press('Enter');
    userTwoPage.waitForSelector(thirdReflectionBox);

    // User One Scenario, Cont'd
    await userOnePage.click(startField);
    userOnePage.fill(startField, randomStatement);
    userOnePage.waitForLoadState('networkidle');
    userOnePage.keyboard.press('Enter');
    userOnePage.keyboard.press('Enter');
    userOnePage.waitForSelector(firstReflectionBox);

    await userOnePage.click(stopField);
    userOnePage.fill(stopField, randomStatement);
    userOnePage.waitForLoadState('networkidle');
    userOnePage.keyboard.press('Enter');
    userOnePage.keyboard.press('Enter');
    userOnePage.waitForSelector(secondReflectionBox);

    await userOnePage.click(continueField);
    userOnePage.fill(continueField, randomStatement);
    userOnePage.waitForLoadState('networkidle');
    userOnePage.keyboard.press('Enter');
    userOnePage.keyboard.press('Enter');
    userOnePage.waitForSelector(thirdReflectionBox);

    // Assertions for Both Users
    expect(userOnePage.locator('[aria-label="Edit this reflection"]')).toHaveCount(6);
    expect(userTwoPage.locator('[aria-label="Edit this reflection"]')).toHaveCount(6);

    await browser.close();

} finally {

    const browser = await chromium.launch();
    const userOneContext = await browser.newContext({ storageState: './src/fixtures/storageState/firstUser.json'});
    const userOnePage = await userOneContext.newPage();

    // User One Cleanup
    await userOnePage.goto(`${baseURL}/meetings`);
    userOnePage.click(activeMeetingBox);
    userOnePage.dblclick(endMeetingButton);

    await userOnePage.goto(`${baseURL}/me`)

   let existingSelector = await userOnePage.isVisible(tripleDotForMessage);
    while (existingSelector === true) {
        await userOnePage.click(tripleDotForMessage);
        userOnePage.click(archiveMeeting);

        let hiddenSelector = await userOnePage.isHidden(tripleDotForMessage);
        if (hiddenSelector === true) {
            break;
        }
        }

    await browser.close();
}
});
