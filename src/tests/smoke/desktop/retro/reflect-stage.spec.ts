//
import { test, expect, chromium } from '@playwright/test';
import 'dotenv/config';
import { randomStatement } from '@data/test_data.json';
import { blankIcebreakerCheckbox, settingsForRetro, includeIcebreakerCheckbox, selectAnotherTemplate } from '@pages/setup-meeting/setup-meeting-setting-widget';
import { endMeetingButton } from '@pages/in-meeting/general/general-in-meeting';
import { startField, firstReflectionBox, stopField, secondReflectionBox, continueField, thirdReflectionBox } from '@pages/in-meeting/retro/desktop-specific-reflect-stage';
import { activeMeetingBox, addMeetingButton } from '@pages/meetings-homepage/meetings-homepage';
import { retrospectiveOption, startMeetingButton } from '@pages/setup-meeting/general-setup-meeting';
import { useTemplateButton } from '@pages/setup-meeting/general-templates-popup';
import { startStopContinueTemplate } from '@pages/setup-meeting/retro-templates';
import { tripleDotForMessage, archiveMeeting } from '@pages/timeline/meeting-summary';

const baseURL = process.env.BASE_URL;

test('2 Users Add Reflections', async() => {

try {
    
    const browser = await chromium.launch();

    const userOneContext = await browser.newContext({ storageState: 'src/fixtures/storageState/firstUser.json'});
    const userTwoContext = await browser.newContext({ storageState: 'src/fixtures/storageState/secondUser.json'});

    const userOnePage = await userOneContext.newPage();
    const userTwoPage = await userTwoContext.newPage();

    // User One Scenario
    await userOnePage.goto(`${baseURL}/meetings`);
    await userOnePage.click(addMeetingButton);
    await userOnePage.click(retrospectiveOption);
    await userOnePage.click(settingsForRetro);

    let hiddenBlankCheckbox = await userOnePage.isHidden(blankIcebreakerCheckbox);
    if ( hiddenBlankCheckbox === true ) {
        await userOnePage.click(includeIcebreakerCheckbox);
        await userOnePage.click(settingsForRetro);
    }

    let hiddenTemplate = await userOnePage.isHidden(startStopContinueTemplate);
    if ( hiddenTemplate === true ) {
        await userOnePage.click(selectAnotherTemplate);
        await userOnePage.click(startStopContinueTemplate);
        await userOnePage.click(useTemplateButton);
    }

    await userOnePage.click(startMeetingButton);
        
    // User Two Scenario
    await userTwoPage.goto(`${baseURL}/meetings`);
    await userTwoPage.click(activeMeetingBox);

    await userTwoPage.click(startField);
    await userTwoPage.fill(startField, randomStatement);
    await userTwoPage.keyboard.press('Enter');
    await userTwoPage.keyboard.press('Enter');
    await userTwoPage.waitForSelector(firstReflectionBox);

    await userTwoPage.click(stopField);
    await userTwoPage.fill(stopField, randomStatement);
    await userTwoPage.keyboard.press('Enter');
    await userTwoPage.keyboard.press('Enter');
    await userTwoPage.waitForSelector(secondReflectionBox);

    await userTwoPage.click(continueField);
    await userTwoPage.fill(continueField, randomStatement);
    await userTwoPage.keyboard.press('Enter');
    await userTwoPage.keyboard.press('Enter');
    await userTwoPage.waitForSelector(thirdReflectionBox);

    // User One Scenario, Cont'd
    await userOnePage.click(startField);
    await userOnePage.fill(startField, randomStatement);
    await userOnePage.keyboard.press('Enter');
    await userOnePage.keyboard.press('Enter');
    await userOnePage.waitForSelector(firstReflectionBox);

    await userOnePage.click(stopField);
    await userOnePage.fill(stopField, randomStatement);
    await userOnePage.keyboard.press('Enter');
    await userOnePage.keyboard.press('Enter');
    await userOnePage.waitForSelector(secondReflectionBox);

    await userOnePage.click(continueField);
    await userOnePage.fill(continueField, randomStatement);
    await userOnePage.keyboard.press('Enter');
    await userOnePage.keyboard.press('Enter');
    await userOnePage.waitForSelector(thirdReflectionBox);

    // Assertions for Both Users
    await expect(userOnePage.locator('[aria-label="Edit this reflection"]')).toHaveCount(6);
    await expect(userTwoPage.locator('[aria-label="Edit this reflection"]')).toHaveCount(6);

    await browser.close();

} finally {

    const browser = await chromium.launch();
    const userOneContext = await browser.newContext({ storageState: 'src/fixtures/storageState/firstUser.json'});
    const userOnePage = await userOneContext.newPage();

    // User One Cleanup
    await userOnePage.goto(`${baseURL}/meetings`);
    await userOnePage.click(activeMeetingBox);
    await userOnePage.dblclick(endMeetingButton);

    await userOnePage.goto(`${baseURL}/me`)

   let existingSelector = await userOnePage.isVisible(tripleDotForMessage);
    while (existingSelector === true) {
        await userOnePage.click(tripleDotForMessage);
        await userOnePage.click(archiveMeeting);

        let hiddenSelector = await userOnePage.isHidden(tripleDotForMessage);
        if (hiddenSelector === true) {
            break;
        }
        }

    await browser.close();
}
});
