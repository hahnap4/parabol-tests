import { test, expect } from '@playwright/test';
import { CompleteReflectionInStartColumnBy } from '../../../../common-events/demo/reflect-stage/desktop/complete-reflection-for/start-column';
import { CompleteReflectionInStopColumnBy } from '../../../../common-events/demo/reflect-stage/desktop/complete-reflection-for/stop-column';
import { CompleteReflectionInContinueColumnBy } from '../../../../common-events/demo/reflect-stage/desktop/complete-reflection-for/continue-column';
import { StartDemoReflectStageBy } from '../../../../common-events/demo/fixtures/start-demo-stage/reflect';

test('Type Anonymous Reflections into Boxes', async({ page }) => {
    
    await StartDemoReflectStage.toApp();
    FillOutReflectionInStartColumn.inApp();
    FillOutReflectionInStopColumn.inApp();
    FillOutReflectionInContinueColumn.inApp();

    expect(page.locator('[aria-label="Edit this reflection"]')).toHaveCount(6);
    
});