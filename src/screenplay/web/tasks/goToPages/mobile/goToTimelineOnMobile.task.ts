import { 
    Actor, Task, Wait, Navigate, Click, Tap, removeSideNavOnMobile, 
    timelineButton
} from '@index';

export class GoToTimelineOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/'),
            Click.on(timelineButton),
            Tap.on(removeSideNavOnMobile),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToTimelineOnMobile {
        return new GoToTimelineOnMobile();
    }
}