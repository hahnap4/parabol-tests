import { 
    Actor, Task, Navigate, Wait, Click, 
} from '@index';

export class GoToTimelinePage extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/me'),
            Wait.forLoadState('networkidle')
        );
}

    public static toApp(): GoToTimelinePage {{
        return new GoToTimelinePage();
    }
}
}