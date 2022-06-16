import '@playwright/test';
import { Actor, BrowseTheWeb, test, expect } from '@index';
import { EndDemoRetroMeeting } from '@tasks/demo/endDemoRetroMeeting.task';

test('Check Demo Summary after Ending Demo', async({ demoDiscussPage, page }) => {

    const actor = Actor.named('Deemo')
        .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(EndDemoRetroMeeting.inApp());

    await expect(page.url()).toContain('/retrospective-demo-summary');
    
});