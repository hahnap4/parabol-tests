//
import { test, expect, browser } from '@playwright/test';
import {
    includeIcebreakerCheckbox,
    startStopContinueTemplate, startMeetingButton, 
    tripleDotForMessage, firstReflectionBox, secondReflectionBox,
    thirdReflectionBox, blankIcebreakerCheckbox
 } from '@index';
import { LoginAsUserOneBy } from '../../../../common-events/auth/login-as/user-one';
import { LoginAsUserTwoBy } from '../../../../common-events/auth/login-as/user-two';
import { GoToRetroMeetingSetupPageBy } from '../../../../common-events/go-to-pages/desktop/retro-meeting-setup';
import { EnterRetroMeetingBy } from '../../../../common-events/retro/desktop/enter-retro-meeting';
import { ChangeTemplateBy } from '../../../../common-events/retro/desktop/change-template';
import { CompleteReflectionForStartColumnBy } from '../../../../common-events/demo/reflect-stage/desktop/complete-reflection-for/start-column';
import { CompleteReflectionForStopColumnBy } from '../../../../common-events/demo/reflect-stage/desktop/complete-reflection-for/stop-column';
import { CompleteReflectionForContinueColumnBy } from '../../../../common-events/demo/reflect-stage/desktop/complete-reflection-for/continue-column';
import { EndMeetingBy } from '../../../../common-events/end-meeting';
import { RemoveMeetingSummaryMessageBy } from '../../../../common-events/remove-meeting-summary-message';

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
