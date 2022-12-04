import { test, expect } from '@playwright/test';
import { CompleteReflectionForStartColumnOnMobileBy } from '../../../../common-events/demo/reflect-stage/mobile/complete-reflection-for/start-column';
import { CompleteReflectionForStopColumnOnMobileBy } from '../../../../common-events/demo/reflect-stage/mobile/complete-reflection-for/stop-column';
import { CompleteReflectionForContinueColumnOnMobileBy } from '../../../../common-events/demo/reflect-stage/mobile/complete-reflection-for/continue-column';
import { GoToStopColumnBy } from '../../../../common-events/demo/reflect-stage/mobile/go-to-column/stop';
import { GoToContinueColumnBy } from '../../../../common-events/demo/reflect-stage/mobile/go-to-column/continue';
import { GoToStartColumnBy } from '../../../../common-events/demo/reflect-stage/mobile/go-to-column/start';
import { GoToDemoReflectStageBy } from '../../../../common-events/demo/fixtures/start-demo-stage/reflect';

test('Type Anonymous Reflections into Boxes', async({ page }) => {

    const goToDemoReflectStageBy = new GoToDemoReflectStageBy(page);
    await goToDemoReflectStageBy.StartingDemo();

    const completeReflectionForStartColumnOnMobileBy = new CompleteReflectionForStartColumnOnMobileBy(page);
    await completeReflectionForStartColumnOnMobileBy.FillingInStartField();
    completeReflectionForStartColumnOnMobileBy.SubmittingReflection();

    const goToStopColumnBy = new GoToStopColumnBy(page);
    await goToStopColumnBy.GoingToTheSecondReflection();

    const completeReflectionForStopColumnOnMobileBy = new CompleteReflectionForStopColumnOnMobileBy(page);
    await completeReflectionForStopColumnOnMobileBy.FillingInStopField();
    completeReflectionForStopColumnOnMobileBy.SubmittingReflection();

    const goToContinueColumnBy = new GoToContinueColumnBy(page);
    await goToContinueColumnBy.GoingToTheThirdReflection();

    const completeReflectionForContinueColumnOnMobileBy = new CompleteReflectionForContinueColumnOnMobileBy(page);
    await completeReflectionForContinueColumnOnMobileBy.FillingInContinueField();
    completeReflectionForContinueColumnOnMobileBy.SubmittingReflection();

    const goToStartColumnBy = new GoToStartColumnBy(page);
    await goToStartColumnBy.GoingToTheFirstReflection();

    await expect(page.locator('.css-1rpti45')).toHaveCount(6)
});