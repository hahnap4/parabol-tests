import { test, expect } from '@playwright/test';
import { EndDemoRetroMeetingBy } from '../../../../common-events/demo/end-demo-retro-meeting';
import { GoToDemoDiscussionStageBy } from '../../../../common-events/demo/fixtures/start-demo-stage/discussion';
import { StartDemoBy } from '../../../../common-events/demo/fixtures/starting-demo';
import 'dotenv/config';

const BaseURL = process.env.BASE_URL;

test('Check Demo Summary after Ending Demo', async({ page }) => {
    const startDemoBy = new StartDemoBy(page);
    await startDemoBy.NavigatingToURL();

    const goToDemoDiscussionStageBy = new GoToDemoDiscussionStageBy(page);
    await goToDemoDiscussionStageBy.SkippingTopics();

    const endDemoRetroMeetingBy = new EndDemoRetroMeetingBy(page);
    await endDemoRetroMeetingBy.ClickingOnEndDemoButton();

    await expect(page.url()).toContain(`${BaseURL}/retrospective-demo-summary`);
    
});