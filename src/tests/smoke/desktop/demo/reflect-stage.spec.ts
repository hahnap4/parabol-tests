import { test, expect } from '@playwright/test';
import { CompleteReflectionForStartColumnBy } from '../../../../common-events/demo/reflect-stage/desktop/complete-reflection-for/start-column';
import { CompleteReflectionForStopColumnBy } from '../../../../common-events/demo/reflect-stage/desktop/complete-reflection-for/stop-column';
import { CompleteReflectionForContinueColumnBy } from '../../../../common-events/demo/reflect-stage/desktop/complete-reflection-for/continue-column';
import { GoToDemoReflectStageBy } from '../../../../common-events/demo/fixtures/start-demo-stage/reflect';

test('Type Anonymous Reflections into Boxes', async({ page }) => {
    const goToDemoReflectStageBy = new GoToDemoReflectStageBy(page);
    await goToDemoReflectStageBy.StartingDemo();

    const completeReflectionForStartColumnBy = new CompleteReflectionForStartColumnBy(page);
    await completeReflectionForStartColumnBy.FillingInStartField();
    await completeReflectionForStartColumnBy.SubmittingReflection();

    const completeReflectionForStopColumnBy = new CompleteReflectionForStopColumnBy(page);
    await completeReflectionForStopColumnBy.FillingInStopField();
    await completeReflectionForStopColumnBy.SubmittingReflection();

    const completeReflectionForContinueColumnBy = new CompleteReflectionForContinueColumnBy(page);
    await completeReflectionForContinueColumnBy.FillingInContinueField();
    await completeReflectionForContinueColumnBy.SubmittingReflection();

    await expect(page.locator('[aria-label="Edit this reflection"]')).toHaveCount(6);
});