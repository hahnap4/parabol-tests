import { 
    Actor, Task, Navigate, Wait
} from '@index';

export class GoToMyTasksPage extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/me/tasks'),
            Wait.forLoadState('networkidle')
        );
}

    public static toApp(): GoToMyTasksPage {{
        return new GoToMyTasksPage();
    }
}
}