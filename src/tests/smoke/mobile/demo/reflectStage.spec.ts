import { test, expect } from '@playwright/test';
import { FillOutReflectionInStartColumnOnMobile } from 'src/common-events/demo/reflect-stage/mobile/fill-out-reflection-in-start-column-on-mobile';
import { FillOutReflectionInStopColumnOnMobile } from 'src/common-events/demo/reflect-stage/mobile/fill-out-reflection-in-stop-column-on-mobile';
import { FillOutReflectionInContinueColumnOnMobile } from 'src/common-events/demo/reflect-stage/mobile/fill-out-reflection-in-continue-column-on-mobile';
import { GoToStopColumn } from 'src/common-events/demo/reflect-stage/mobile/goToStopColumn.task';
import { GoToContinueColumn } from 'src/common-events/demo/reflect-stage/mobile/go-to-continue-column';
import { GoToStartColumn } from 'src/common-events/demo/reflect-stage/mobile/goToStartColumn.task';
import { StartDemoReflectStage } from 'src/common-events/demo/fixtures/start-demo-stage/reflect';

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