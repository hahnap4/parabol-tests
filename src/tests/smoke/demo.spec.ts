import '@playwright/test';
import { inMeetingPage } from '../../objects/inMeeting';
import { test, expect } from '../../fixtures/testSetup';
import faker from '@faker-js/faker';

test.describe('Unauthenticated Demo', () => {

    // Reflect Stage
    test('Type Anonymous Reflections into Boxes', async({ demoReflectPage, page }) => {
        
    });

    // Group Stage
    test('Group Cards Together', async({ demoGroupPage, page }) => {

    });

    test('Edit Group Name', async({ demoGroupPage, page }) => {

    });

    // Vote Stage
    test('Anonymously Vote for Topics', async({ demoVotePage, page }) => {

    });

    test('Cast up to 3 votes for 1 group', async({ demoVotePage, page }) => {
        
    });
    
    // Discuss Stage 
    test('Send a Public Comment', async({ demoDiscussPage, page }) => {

    });

    test('Add a New Task', async({ demoDiscussPage, page }) => {
        
    });

    test('Reply to a Task', async({ demoDiscussPage, page }) => {

    });

    test('Cannot Edit Previous Stages', async({ demoDiscussPage, page }) => {

    });

    // End Demo Stage
    test('Check Demo Summary after Ending Demo', async({ demoDiscussPage, page }) => {
        const demopage = new inMeetingPage(page);
        await demopage.endDemo.dblclick();
        await expect(page.url()).toContain('/retrospective-demo-summary');
    });
});