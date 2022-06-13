import { 
    Actor, Task, Click, goToFirstReflection
} from '@index';

export class GoToContinueColumn extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(goToFirstReflection)
        );
}

    public static inApp(): GoToContinueColumn {
        return new GoToContinueColumn();
    }
}