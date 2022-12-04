import { test, expect } from '@playwright/test';
import { FillOutReflectionInStartColumn } from 'src/common-events/demo/reflectStage/desktop/fillOutReflectionInStartColumn.task';
import { FillOutReflectionInStopColumn } from 'src/common-events/demo/reflectStage/desktop/fillOutReflectionInStopColumn.task';
import { FillOutReflectionInContinueColumn } from 'src/common-events/demo/reflectStage/desktop/fillOutReflectionInContinueColumn.task';
import { StartDemoReflectStage } from 'src/common-events/demo/fixtures/startDemoReflectStage.task';

test('Type Anonymous Reflections into Boxes', async({ page }) => {
    
    await StartDemoReflectStage.toApp();
    FillOutReflectionInStartColumn.inApp();
    FillOutReflectionInStopColumn.inApp();
    FillOutReflectionInContinueColumn.inApp();

    expect(page.locator('[aria-label="Edit this reflection"]')).toHaveCount(6);
    
});