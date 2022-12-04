import { test, expect } from '@playwright/test';
import { FillOutReflectionInStartColumnOnMobile } from 'src/common-events/demo/reflectStage/mobile/fillOutReflectionInStartColumnOnMobile.task';
import { FillOutReflectionInStopColumnOnMobile } from 'src/common-events/demo/reflectStage/mobile/fillOutReflectionInStopColumnOnMobile.task';
import { FillOutReflectionInContinueColumnOnMobile } from 'src/common-events/demo/reflectStage/mobile/fillOutReflectionInContinueColumnOnMobile.task';
import { GoToStopColumn } from 'src/common-events/demo/reflectStage/mobile/goToStopColumn.task';
import { GoToContinueColumn } from 'src/common-events/demo/reflectStage/mobile/goToContinueColumn.task';
import { GoToStartColumn } from 'src/common-events/demo/reflectStage/mobile/goToStartColumn.task';
import { StartDemoReflectStage } from 'src/common-events/demo/fixtures/startDemoReflectStage.task';

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