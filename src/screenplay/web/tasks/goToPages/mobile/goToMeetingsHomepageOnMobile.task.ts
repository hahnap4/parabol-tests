import { 
    Actor, Task, Wait, Click, Press, removeSideNavOnMobile, 
    meetingsButton 
} from '@index';
 
 export class GoToMeetingsHomepageOnMobile extends Task {
 
     public async performAs(actor:Actor): Promise<any> {
 
         return actor.attemptsTo(
             Click.on(meetingsButton),
             Wait.forLoadState('networkidle')
         );
 }
 
     public static onApp(): GoToMeetingsHomepageOnMobile {
         return new GoToMeetingsHomepageOnMobile();
     }
 }