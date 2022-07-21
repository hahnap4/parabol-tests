//
import { test, expect, chromium } from '@playwright/test';
import {
    Actor, BrowseTheWeb, Click, includeIcebreakerCheckbox,
    Element, Wait, startStopContinueTemplate, startMeetingButton, 
    Navigate, tripleDotForMessage, firstReflectionBox, secondReflectionBox,
    thirdReflectionBox
 } from '@index';
import { LogInAsUserOne } from '@web/tasks/auth/signIn/logInAsUserOne.task';
import { LogInAsUserTwo } from '@web/tasks/auth/signIn/logInAsUserTwo.task';
import { GoToRetroMeetingSetupPage } from '@web/tasks/goToPages/desktop/goToRetroMeetingSetupPage.task';
import { EnterRetroMeeting } from '@web/tasks/retro/desktop/enterRetroMeeting.task';
import { ChangeTemplate } from '@web/tasks/retro/desktop/changeTemplate.task';
import { FillOutReflectionInStartColumn } from '@web/tasks/demo/reflectStage/desktop/fillOutReflectionInStartColumn.task';
import { FillOutReflectionInStopColumn } from '@web/tasks/demo/reflectStage/desktop/fillOutReflectionInStopColumn.task';
import { FillOutReflectionInContinueColumn } from '@web/tasks/demo/reflectStage/desktop/fillOutReflectionInContinueColumn.task';
import { EndMeeting } from '@web/tasks/endMeeting.task';
import { RemoveMeetingSummaryMessage } from '@web/tasks/removeMeetingSummaryMessage.task';

// Interact with contexts independently
test('2 Users Add Reflections', async({ page }) => {

try {

// Create a browser instance 
const browser = await chromium.launch();

// Create two isolated browser contexts
const robertContext = await browser.newContext();
const lisaContext = await browser.newContext();

// Create two pages
const robertPage = await robertContext.newPage();
const lisaPage = await lisaContext.newPage();

    const Robert = Actor.named('Robert')
        .can(BrowseTheWeb.using(robertPage));

    await Robert.attemptsTo(
        LogInAsUserOne.inApp(),
        GoToRetroMeetingSetupPage.onApp()
    );

    if ( (await Robert.asks(Element.isVisible(includeIcebreakerCheckbox))) === true ) {
        await Robert.attemptsTo(
            Click.on(includeIcebreakerCheckbox),
            Wait.forLoadState('networkidle')
        );     
    }

    if ( (await Robert.asks(Element.isHidden(startStopContinueTemplate))) === true ) {
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
        existingSelector = await Robert.asks(Element.isVisible(tripleDotForMessage));
        if (existingSelector === false) {
            break;
        }
        }

}
});
