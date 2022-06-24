import { 
    Actor, Task, Wait, Navigate, Click, hamburgerIconForMobile, Press
} from '@index';

export class GoToMyTasksOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/me/tasks'),
            Click.on(hamburgerIconForMobile),
            Press.key('Enter'),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToMyTasksOnMobile {
        return new GoToMyTasksOnMobile();
    }
}