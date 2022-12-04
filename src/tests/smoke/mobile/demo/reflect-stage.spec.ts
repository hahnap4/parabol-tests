import { test, expect } from '@playwright/test';
import { CompleteReflectionInStartColumnOnMobileBy } from '../../../../common-events/demo/reflect-stage/mobile/complete-reflection-for/start-column';
import { CompleteReflectionInStopColumnOnMobileBy } from '../../../../common-events/demo/reflect-stage/mobile/complete-reflection-for/stop-column';
import { CompleteReflectionInContinueColumnOnMobileBy } from '../../../../common-events/demo/reflect-stage/mobile/complete-reflection-for/continue-column';
import { GoToStopColumnBy } from '../../../../common-events/demo/reflect-stage/mobile/go-to-column/stop';
import { GoToContinueColumnBy } from '../../../../common-events/demo/reflect-stage/mobile/go-to-column/continue';
import { GoToStartColumnBy } from '../../../../common-events/demo/reflect-stage/mobile/go-to-column/start';
import { StartDemoReflectStageBy } from '../../../../common-events/demo/fixtures/start-demo-stage/reflect';

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