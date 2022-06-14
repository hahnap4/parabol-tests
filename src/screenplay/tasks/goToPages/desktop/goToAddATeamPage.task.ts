import { 
    Actor, Task, Navigate, Wait, Click, 
} from '@index';

export class GoToAddATeamPage extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/newteam/1'),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToAddATeamPage {{
        return new GoToAddATeamPage();
    }
}
}