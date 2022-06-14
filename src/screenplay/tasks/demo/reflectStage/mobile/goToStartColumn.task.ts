import { 
    Actor, Task, Click, goToFirstReflection
} from '@index';

export class GoToStartColumn extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(goToFirstReflection)
        );
}

    public static inApp(): GoToStartColumn {
        return new GoToStartColumn();
    }
}