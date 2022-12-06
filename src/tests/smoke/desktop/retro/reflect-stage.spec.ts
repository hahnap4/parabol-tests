//
import { test, expect } from '@playwright/test';
import 'dotenv/config';
import { randomStatement } from '@data/test_data.json';
import { settingsForRetro, selectAnotherTemplate } from '@pages/setup-meeting/setup-meeting-setting-widget';
import { startField, stopField, continueField  } from '@pages/in-meeting/retro/desktop-specific-reflect-stage';
import { activeMeetingBox, addMeetingButton } from '@pages/meetings-homepage/meetings-homepage';
import { retrospectiveOption, startMeetingButton } from '@pages/setup-meeting/general-setup-meeting';
import { useTemplateButton } from '@pages/setup-meeting/general-templates-popup';
import { startStopContinueTemplate } from '@pages/setup-meeting/retro-templates';
import { endMeetingButton } from '@pages/in-meeting/general/general-in-meeting';

const baseURL = process.env.BASE_URL;

test('2 Users Add Reflections', async({ browser }) => {

try {

    const userOneContext = await browser.newContext({ storageState: 'src/fixtures/storage-state/first-user.json'});
    const userOnePage = await userOneContext.newPage();

    const userTwoContext = await browser.newContext({ storageState: 'src/fixtures/storage-state/second-user.json'});
    const userTwoPage = await userTwoContext.newPage();

    // User One Scenario
    await userOnePage.goto(`${baseURL}/meetings`);
    await userOnePage.click(addMeetingButton);
    await userOnePage.click(retrospectiveOption);
    await userOnePage.click(settingsForRetro);

    let hiddenTemplate = await userOnePage.isHidden(startStopContinueTemplate);
    if ( hiddenTemplate === true ) {
        await userOnePage.click(selectAnotherTemplate);
        await userOnePage.click(startStopContinueTemplate);
        await userOnePage.click(useTemplateButton);
    }

    await userOnePage.click(startMeetingButton);

    await userOnePage.click(stopField);
    await userOnePage.fill(stopField, randomStatement);
    await userOnePage.keyboard.press('Enter');
    await userOnePage.keyboard.press('Enter');
        
    // User Two Scenario
    await userTwoPage.goto(`${baseURL}/meetings`);
    await userTwoPage.click(activeMeetingBox);

    await userTwoPage.click(startField);
    await userTwoPage.fill(startField, randomStatement);
    await userTwoPage.keyboard.press('Enter');
    await userTwoPage.keyboard.press('Enter');

    await userTwoPage.click(continueField);
    await userTwoPage.fill(continueField, randomStatement);
    await userTwoPage.keyboard.press('Enter');
    await userTwoPage.keyboard.press('Enter');

    // Assertions for Both Users
    await expect(userOnePage.locator('[aria-label="Edit this reflection"]')).toHaveCount(4);
    await expect(userTwoPage.locator('[aria-label="Edit this reflection"]')).toHaveCount(5);

} finally {

    const userOneContext = await browser.newContext({ storageState: 'src/fixtures/storage-state/first-user.json'});
    const userOnePage = await userOneContext.newPage();

    // User One Cleanup
    await userOnePage.goto(`${baseURL}/meetings`);

    await userOnePage.click(activeMeetingBox);
    await userOnePage.dblclick(endMeetingButton);

    await userOnePage.goto(`${baseURL}/me`)

    await browser.close();
}
});
