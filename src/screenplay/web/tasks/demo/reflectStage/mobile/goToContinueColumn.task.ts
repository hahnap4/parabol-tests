import { 
    Actor, Task, Click, goToThirdReflection
} from '@index';

export class GoToContinueColumn extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(goToThirdReflection)
        );
}

    public static inApp(): GoToContinueColumn {
        return new GoToContinueColumn();
    }
}