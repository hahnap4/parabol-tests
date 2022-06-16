import '@playwright/test';
import { Actor, BrowseTheWeb, test, expect } from '@index';
import { FillOutReflectionInStartColumn } from '@tasks/demo/reflectStage/desktop/fillOutReflectionInStartColumn.task';
import { FillOutReflectionInStopColumn } from '@tasks/demo/reflectStage/desktop/fillOutReflectionInStopColumn.task';
import { FillOutReflectionInContinueColumn } from '@tasks/demo/reflectStage/desktop/fillOutReflectionInContinueColumn.task';

test.skip('Type Anonymous Reflections into Boxes', async({ demoReflectPage, page }) => {
    
    const actor = Actor.named('Deemo')
        .can(BrowseTheWeb.using(page));
   
    await actor.attemptsTo(
        FillOutReflectionInStartColumn.inApp(),
        FillOutReflectionInStopColumn.inApp(),
        FillOutReflectionInContinueColumn.inApp()
        );

    await expect(page.locator('[aria-label="Edit this reflection"]')).toHaveCount(6);
    
});