import { 
    Actor, Task, Navigate, Wait 
} from '@index';

export class GoToMyProfilePage extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/me/profile'),
            Wait.forLoadState('networkidle')
        );
}

    public static toApp(): GoToMyProfilePage {{
        return new GoToMyProfilePage();
    }
}
}