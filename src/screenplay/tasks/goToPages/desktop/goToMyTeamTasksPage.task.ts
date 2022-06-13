import { 
    Actor, Task, Navigate, Wait, Click, myTeamTasksButton
} from '@index';

export class GoToMyTeamTasksPage extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/'),
            Click.on(myTeamTasksButton),
            Wait.forLoadState('networkidle')
        );
}

    public static toApp(): GoToMyTeamTasksPage {{
        return new GoToMyTeamTasksPage();
    }
}
}