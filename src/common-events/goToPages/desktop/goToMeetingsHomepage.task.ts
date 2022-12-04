import { 
    Actor, Task, Navigate, Wait
} from '@index';

export class GoToMeetingsHomepage extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/meetings'),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToMeetingsHomepage {{
        return new GoToMeetingsHomepage();
    }
}
}