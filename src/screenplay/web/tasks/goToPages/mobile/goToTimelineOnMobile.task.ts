import { 
    Actor, Task, Wait, Navigate, Click, Press, removeSideNavOnMobile,
    timelineButton
} from '@index';

export class GoToTimelineOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Click.on(timelineButton),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToTimelineOnMobile {
        return new GoToTimelineOnMobile();
    }
}