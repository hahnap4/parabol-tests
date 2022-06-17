import { test, expect } from '@playwright/test';
import { Actor, BrowseTheWeb } from '@index';
import { FillOutReflectionInStartColumnOnMobile } from '@web/tasks/demo/reflectStage/mobile/fillOutReflectionInStartColumnOnMobile.task';
import { FillOutReflectionInStopColumnOnMobile } from '@web/tasks/demo/reflectStage/mobile/fillOutReflectionInStopColumnOnMobile.task';
import { FillOutReflectionInContinueColumnOnMobile } from '@web/tasks/demo/reflectStage/mobile/fillOutReflectionInContinueColumnOnMobile.task';
import { GoToStopColumn } from '@web/tasks/demo/reflectStage/mobile/goToStopColumn.task';
import { GoToContinueColumn } from '@web/tasks/demo/reflectStage/mobile/goToContinueColumn.task';
import { GoToStartColumn } from '@web/tasks/demo/reflectStage/mobile/goToStartColumn.task';
import { StartDemoReflectStage } from '@web/tasks/demo/fixtures/startDemoReflectStage.task';

test('Type Anonymous Reflections into Boxes', async({ page }) => {
    const actor = Actor.named('Deemo')
        .can(BrowseTheWeb.using(page));
   
    await actor.attemptsTo(
        StartDemoReflectStage.toApp(),
        FillOutReflectionInStartColumnOnMobile.inApp(),
        GoToStopColumn.inApp(),
        FillOutReflectionInStopColumnOnMobile.inApp(),
        GoToContinueColumn.inApp(),
        FillOutReflectionInContinueColumnOnMobile.inApp(),
        GoToStartColumn.inApp()
        );
    
    await expect(page.locator('.css-1rpti45')).toHaveCount(6)
});