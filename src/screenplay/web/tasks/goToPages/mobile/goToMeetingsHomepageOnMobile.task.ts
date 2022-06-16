import { 
     Actor, Task, Wait, Navigate, Click, hamburgerIconForMobile, Press
 } from '@index';
 
 export class GoToMeetingsHomepageOnMobile extends Task {
 
     public async performAs(actor:Actor): Promise<any> {
 
         return actor.attemptsTo(
             Navigate.to('/meetings'),
             Click.on(hamburgerIconForMobile),
             Press.key('Enter'),
             Wait.forLoadState('networkidle')
         );
 }
 
     public static onApp(): GoToMeetingsHomepageOnMobile {
         return new GoToMeetingsHomepageOnMobile();
     }
 }