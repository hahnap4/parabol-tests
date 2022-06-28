import { Actor, Task, Wait, Navigate, Click, Press, removeSideNavOnMobile, myTasksButton } from '@index';

export class GoToMyTasksOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
           Click.on(myTasksButton),
           Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToMyTasksOnMobile {
        return new GoToMyTasksOnMobile();
    }
}