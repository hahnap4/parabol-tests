import '@playwright/test';
import { inMeetingPage } from '../../../objects/inMeeting';
import { test, expect } from '../../../fixtures/testSetup';
import faker from '@faker-js/faker';

test.describe('Unauthenticated Demo - Mobile', () => {

    // Reflect Stage
    test.skip('Type Anonymous Reflections into Boxes', async({ demoReflectPage, page }) => {
        const anonReflections = new inMeetingPage(page);
        await anonReflections.startMyReflectionField.click();
        await anonReflections.startMyReflectionField.fill(faker.random.words());
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');
        await anonReflections.secondCircle.click();
        await anonReflections.stopMyReflectionField.click();
        await anonReflections.stopMyReflectionField.fill(faker.random.words());
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');
        await anonReflections.thirdCircle.click();
        await anonReflections.continueMyReflectionField.click();
        await anonReflections.continueMyReflectionField.fill(faker.random.words());
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');
        await expect(page.locator('.css-1rpti45')).toHaveCount(6)
    });

    // Group Stage
    test('Group Cards Together', async({ demoGroupPage, page }) => {

    });

    test.skip('Edit Group Name', async({ demoGroupPage, page }) => {

    });

    // Vote Stage
    test.skip('Anonymously Vote for Topics', async({ demoVotePage, page }) => {

    });

    test.skip('Cast up to 3 votes for 1 group', async({ demoVotePage, page }) => {
        
    });
    
    // Discuss Stage 
    test.skip('Send a Public Comment', async({ demoDiscussPage, page }) => {

    });

    test.skip('Add a New Task', async({ demoDiscussPage, page }) => {
        
    });

    test.skip('Reply to a Task', async({ demoDiscussPage, page }) => {

    });

    test.skip('Cannot Edit Previous Stages', async({ demoDiscussPage, page }) => {

    });

    // End Demo Stage
    test.skip('Check Demo Summary after Ending Demo', async({ demoDiscussPage, page }) => {
        const demopage = new inMeetingPage(page);
        await demopage.endDemo.dblclick();
        await expect(page.url()).toContain('/retrospective-demo-summary');
    });
});