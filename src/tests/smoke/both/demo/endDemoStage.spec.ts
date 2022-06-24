import { test, expect } from '@playwright/test';
import { Actor, BrowseTheWeb } from '@index';
import { EndDemoRetroMeeting } from '@web/tasks/demo/endDemoRetroMeeting.task';
import { StartDemoDiscussionStage } from '@web/tasks/demo/fixtures/startDemoDiscussionStage.task';

test('Check Demo Summary after Ending Demo', async({ page }) => {

    const actor = Actor.named('Deemo')
        .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(
        StartDemoDiscussionStage.toApp(),
        EndDemoRetroMeeting.inApp()
        );

    await expect(page.url()).toContain('/retrospective-demo-summary');
    
});