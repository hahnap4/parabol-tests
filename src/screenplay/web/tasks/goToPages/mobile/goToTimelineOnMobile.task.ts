import { 
    Actor, Task, Wait, Navigate, Click, Press, hamburgerIconForMobile, 
    timelineButton
} from '@index';

export class GoToTimelineOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/'),
            Click.on(timelineButton),
            Click.on(hamburgerIconForMobile),
            Press.key('Enter'),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToTimelineOnMobile {
        return new GoToTimelineOnMobile();
    }
}