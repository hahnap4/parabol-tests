import { 
    Actor, Task, Wait, Navigate, removeSideNavOnMobile, Tap
} from '@index';

export class GoToMyTasksOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/me/tasks'),
            Tap.on(removeSideNavOnMobile),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToMyTasksOnMobile {
        return new GoToMyTasksOnMobile();
    }
}