import { test, expect } from '@playwright/test';
import { Actor, BrowseTheWeb } from '@index';
import { FillOutReflectionInStartColumn } from '@web/tasks/demo/reflectStage/desktop/fillOutReflectionInStartColumn.task';
import { FillOutReflectionInStopColumn } from '@web/tasks/demo/reflectStage/desktop/fillOutReflectionInStopColumn.task';
import { FillOutReflectionInContinueColumn } from '@web/tasks/demo/reflectStage/desktop/fillOutReflectionInContinueColumn.task';
import { StartDemoReflectStage } from '@web/tasks/demo/fixtures/startDemoReflectStage.task';

test.skip('Type Anonymous Reflections into Boxes', async({ page }) => {
    
    const actor = Actor.named('Deemo')
        .can(BrowseTheWeb.using(page));
   
    await actor.attemptsTo(
        StartDemoReflectStage.toApp(),
        FillOutReflectionInStartColumn.inApp(),
        FillOutReflectionInStopColumn.inApp(),
        FillOutReflectionInContinueColumn.inApp()
        );

    await expect(page.locator('[aria-label="Edit this reflection"]')).toHaveCount(6);
    
});