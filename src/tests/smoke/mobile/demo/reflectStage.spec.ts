import '@playwright/test';
import { 
    Actor, BrowseTheWeb, test, expect, FillOutReflectionInStartColumnOnMobile,
    GoToStopColumn, FillOutReflectionInStopColumnOnMobile, GoToContinueColumn,
    FillOutReflectionInContinueColumnOnMobile, GoToStartColumn
} from '@index';

test('Type Anonymous Reflections into Boxes', async({ demoReflectPage, page }) => {
    const actor = Actor.named('Deemo')
        .can(BrowseTheWeb.using(page));
   
    await actor.attemptsTo(
        FillOutReflectionInStartColumnOnMobile.inApp(),
        GoToStopColumn.inApp(),
        FillOutReflectionInStopColumnOnMobile.inApp(),
        GoToContinueColumn.inApp(),
        FillOutReflectionInContinueColumnOnMobile.inApp(),
        GoToStartColumn.inApp()
        );
    
    await expect(page.locator('.css-1rpti45')).toHaveCount(6)
});