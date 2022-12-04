//
import { test, expect, browser } from '@playwright/test';
import {
    includeIcebreakerCheckbox,
    startStopContinueTemplate, startMeetingButton, 
    tripleDotForMessage, firstReflectionBox, secondReflectionBox,
    thirdReflectionBox, blankIcebreakerCheckbox
 } from '@index';
import { LogInAsUserOne } from 'src/common-events/auth/login-as/user-one';
import { LogInAsUserTwo } from 'src/common-events/auth/login-as/user-two';
import { GoToRetroMeetingSetupPage } from 'src/common-events/goToPages/desktop/goToRetroMeetingSetupPage.task';
import { EnterRetroMeeting } from 'src/common-events/retro/desktop/enterRetroMeeting.task';
import { ChangeTemplate } from 'src/common-events/retro/desktop/changeTemplate.task';
import { FillOutReflectionInStartColumn } from 'src/common-events/demo/reflect-stage/desktop/complete-reflection-for/start-column';
import { FillOutReflectionInStopColumn } from 'src/common-events/demo/reflect-stage/desktop/complete-reflection-for/stop-column';
import { FillOutReflectionInContinueColumn } from 'src/common-events/demo/reflect-stage/desktop/complete-reflection-for/continue-column';
import { EndMeeting } from 'src/common-events/endMeeting.task';
import { RemoveMeetingSummaryMessage } from 'src/common-events/removeMeetingSummaryMessage.task';

// FIXME: The setupMeeting page is no longer a separate page. It's a popup instead.
// Check if the locator values need to be changed.

// Interact with contexts independently
test('2 Users Add Reflections', async({ browser }) => {

try {

// Create two isolated browser contexts
const robertContext = await browser.newContext({ storageState: './src/fixtures/storageState/firstUser.json'});
const lisaContext = await browser.newContext({ storageState: './src/fixtures/storageState/secondUser.json'});

// Create two pages
const robertPage = await robertContext.newPage();
const lisaPage = await lisaContext.newPage();

    await robertPage.GoToRetroMeetingSetupPage();

    let hiddenBlankCheckbox = await Robert.asks(Element.isHidden(blankIcebreakerCheckbox));
    if ( hiddenBlankCheckbox === true ) {
        await Robert.attemptsTo(
            Click.on(includeIcebreakerCheckbox),
            Wait.forLoadState('networkidle')
        );     
    }

    let hiddenTemplate = await Robert.asks(Element.isHidden(startStopContinueTemplate));
    if ( hiddenTemplate === true ) {
        await Robert.attemptsTo(
            ChangeTemplate.inApp()
        );
    }

    await Robert.attemptsTo(
        Click.on(startMeetingButton),
        Wait.forLoadState('networkidle')
    );
/*        
    const Lisa = Actor.named('Lisa')
        .can(BrowseTheWeb.using(lisaPage));
    
    await Lisa.attemptsTo(
        LogInAsUserTwo.inApp(),
        EnterRetroMeeting.inApp(),
        FillOutReflectionInStartColumn.inApp(),
        Wait.forSelector(firstReflectionBox),
        FillOutReflectionInStopColumn.inApp(),
        Wait.forSelector(secondReflectionBox),
        FillOutReflectionInContinueColumn.inApp(),
        Wait.forSelector(thirdReflectionBox)
    );

    await Robert.attemptsTo(
        FillOutReflectionInStartColumn.inApp(),
        Wait.forSelector(firstReflectionBox),
        FillOutReflectionInStopColumn.inApp(),
        Wait.forSelector(secondReflectionBox),
        FillOutReflectionInContinueColumn.inApp(),
        Wait.forSelector(thirdReflectionBox)
    );

    await expect(robertPage.locator('[aria-label="Edit this reflection"]')).toHaveCount(6);
    await expect(lisaPage.locator('[aria-label="Edit this reflection"]')).toHaveCount(6);
*/
} finally {

    const browser = await chromium.launch();
    const robertContext = await browser.newContext();
    const robertPage = await robertContext.newPage();

    const Robert = Actor.named('Robert')
        .can(BrowseTheWeb.using(robertPage));

    await Robert.attemptsTo(
        LogInAsUserOne.inApp(),
        Navigate.to('/'),
        EnterRetroMeeting.inApp(),
        EndMeeting.inApp(),
        Navigate.to('/me')
    );

   let existingSelector = await Robert.asks(Element.isVisible(tripleDotForMessage));
    while (existingSelector === true) {
        await Robert.attemptsTo(
            RemoveMeetingSummaryMessage.inApp()
        );
        let hiddenSelector = await Robert.asks(Element.isHidden(tripleDotForMessage));
        if (hiddenSelector === true) {
            break;
        }
        }
}
});
