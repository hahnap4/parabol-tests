import '@playwright/test';
import { Actor, BrowseTheWeb, test, expect } from '@index';
import { FillOutReflectionInStartColumnOnMobile } from '@tasks/demo/reflectStage/mobile/fillOutReflectionInStartColumnOnMobile.task';
import { FillOutReflectionInStopColumnOnMobile } from '@tasks/demo/reflectStage/mobile/fillOutReflectionInStopColumnOnMobile.task';
import { FillOutReflectionInContinueColumnOnMobile } from '@tasks/demo/reflectStage/mobile/fillOutReflectionInContinueColumnOnMobile.task';
import { GoToStopColumn } from '@tasks/demo/reflectStage/mobile/goToStopColumn.task';
import { GoToContinueColumn } from '@tasks/demo/reflectStage/mobile/goToContinueColumn.task';
import { GoToStartColumn } from '@tasks/demo/reflectStage/mobile/goToStartColumn.task';

test.skip('Type Anonymous Reflections into Boxes', async({ demoReflectPage, page }) => {
    const actor = Actor.named('Deemo')
        .can(BrowseTheWeb.using(page));
   
    await actor.attemptsTo(
        FillOutReflectionInStartColumnOnMobile.inApp(),
        GoToStopColumn.inApp(),
        FillOutReflectionInStopColumnOnMobile.inApp(),
        GoToContinueColumn.inApp(),
        FillOutReflectionInContinueColumnOnMobile.inApp(),
        GoToStartColumn.inApp()
        );
    
    await expect(page.locator('.css-1rpti45')).toHaveCount(6)
});