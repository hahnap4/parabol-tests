import { 
    Actor, Task, Fill, Click, continueField, Press
} from '@index';

export class fillOutReflectionInContinueColumn extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(continueField),
            Fill.in(continueField, random),
            Press.key('Enter'),
            Press.key('Enter')
        );
}

    public static inApp(): fillOutReflectionInContinueColumn {
        return new fillOutReflectionInContinueColumn();
    }
}