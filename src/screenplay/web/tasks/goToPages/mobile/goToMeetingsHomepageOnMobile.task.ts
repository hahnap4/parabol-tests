import { 
     Actor, Task, Wait, Navigate, Tap, removeSideNavOnMobile, 
 } from '@index';
 
 export class GoToMeetingsHomepageOnMobile extends Task {
 
     public async performAs(actor:Actor): Promise<any> {
 
         return actor.attemptsTo(
             Navigate.to('/meetings'),
             Tap.on(removeSideNavOnMobile),
             Wait.forLoadState('networkidle')
         );
 }
 
     public static onApp(): GoToMeetingsHomepageOnMobile {
         return new GoToMeetingsHomepageOnMobile();
     }
 }