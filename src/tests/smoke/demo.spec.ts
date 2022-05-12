import { test, expect } from '@playwright/test';
import { inMeetingPage } from '../../objects/inMeeting';

test.describe('Unauthenticated Demo', () => {

    // 
    test(' ', async({ page }) => {
        const demopage = new inMeetingPage(page);
        await page.goto('https://action-staging.parabol.co/retrospective-demo/reflect');
    });
    
});

/* 
TODO: Test the Demo, unauthenticated

Requires: 
 - inMeeting objects
*/