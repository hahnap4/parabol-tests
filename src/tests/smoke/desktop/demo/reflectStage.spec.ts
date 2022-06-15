import '@playwright/test';
import { 
    Actor, BrowseTheWeb, test, expect, FillOutReflectionInStartColumn,
    FillOutReflectionInStopColumn, FillOutReflectionInContinueColumn
} from '@index';

test('Type Anonymous Reflections into Boxes', async({ demoReflectPage, page }) => {
    
    const actor = Actor.named('Deemo')
        .can(BrowseTheWeb.using(page));
   
    await actor.attemptsTo(
        FillOutReflectionInStartColumn.inApp(),
        FillOutReflectionInStopColumn.inApp(),
        FillOutReflectionInContinueColumn.inApp()
        );

    await expect(page.locator('[aria-label="Edit this reflection"]')).toHaveCount(6);
    
});