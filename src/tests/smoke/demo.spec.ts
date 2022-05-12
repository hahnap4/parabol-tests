import { test, expect } from '@playwright/test';
import { inMeetingPage } from '../../objects/inMeeting';

test.describe('Unauthenticated Demo', () => {

    // Reflect Stage
    test('Type Anonymous Reflections into Boxes', async({ page }) => {
        const demopage = new inMeetingPage(page);
        await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
        await demopage.startDemo.click();
        
    });

    // Group Stage
    test('Group Cards Together', async({ page }) => {
        const demopage = new inMeetingPage(page);
        await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
        await demopage.startDemo.click();
        await demopage.nextBtn.dblclick();
    });

    test('Edit Group Name', async({ page }) => {
        const demopage = new inMeetingPage(page);
        await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
        await demopage.startDemo.click();
        await demopage.nextBtn.dblclick();
    });

    // Vote Stage
    test('Anonymously Vote for Topics', async({ page }) => {
        const demopage = new inMeetingPage(page);
        await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
        await demopage.startDemo.click();
        await demopage.nextBtn.dblclick();
        await demopage.nextBtn.dblclick();
        
    });

    test('Cast up to 3 votes for 1 group', async({ page }) => {
        const demopage = new inMeetingPage(page);
        await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
        await demopage.startDemo.click();
        await demopage.nextBtn.dblclick();
        await demopage.nextBtn.dblclick();
        
    });
    
    // Discuss Stage
    test('Send a Public Comment', async({ page }) => {
        const demopage = new inMeetingPage(page);
        await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
        await demopage.startDemo.click();
        await demopage.nextBtn.dblclick();
        await demopage.nextBtn.dblclick();
        await demopage.nextBtn.click();


        
    });

    test('Add a New Task', async({ page }) => {
        const demopage = new inMeetingPage(page);
        await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
        await demopage.startDemo.click();
        await demopage.nextBtn.dblclick();
        await demopage.nextBtn.dblclick();
        await demopage.nextBtn.click();


        
    });

    test('Reply to a Task', async({ page }) => {
        const demopage = new inMeetingPage(page);
        await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
        await demopage.startDemo.click();
        await demopage.nextBtn.dblclick();
        await demopage.nextBtn.dblclick();
        await demopage.nextBtn.click();


        
    });

    test('Cannot Edit Previous Stages', async({ page }) => {
        const demopage = new inMeetingPage(page);
        await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
        await demopage.startDemo.click();
        await demopage.nextBtn.dblclick();
        await demopage.nextBtn.dblclick();
        await demopage.nextBtn.click();


        
    });

    // End Demo Stage
    test('Check Demo Summary after Ending Demo', async({ page }) => {
        const demopage = new inMeetingPage(page);
        await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
        await demopage.startDemo.click();
        await demopage.nextBtn.dblclick();
        await demopage.nextBtn.dblclick();
        await demopage.nextBtn.dblclick();
        await demopage.nextBtn.dblclick();
        await demopage.nextBtn.click();
        await demopage.endDemo.dblclick();
        await expect(page.url()).toContain('/retrospective-demo-summary');
    });
});