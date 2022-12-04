import { test, expect } from '@playwright/test';
import { EndDemoRetroMeeting } from 'src/common-events/demo/endDemoRetroMeeting.task';
import { StartDemoDiscussionStage } from 'src/common-events/demo/fixtures/startDemoDiscussionStage.task';

test('Check Demo Summary after Ending Demo', async({ page }) => {

    await StartDemoDiscussionStage.toApp();
    
    EndDemoRetroMeeting.inApp();

    expect(page.url()).toContain('/retrospective-demo-summary');
    
});