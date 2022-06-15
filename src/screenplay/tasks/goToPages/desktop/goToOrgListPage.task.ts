import { 
    Actor, Task, Navigate, Wait
} from '@index';

export class GoToOrgListPage extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/me/organizations'),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToOrgListPage {{
        return new GoToOrgListPage();
    }
}
}