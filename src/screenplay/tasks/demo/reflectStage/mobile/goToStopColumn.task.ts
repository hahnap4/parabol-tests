import { 
    Actor, Task, Click, goToSecondReflection
} from '@index';

export class GoToStopColumn extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(goToSecondReflection)
        );
}

    public static inApp(): GoToStopColumn {
        return new GoToStopColumn();
    }
}