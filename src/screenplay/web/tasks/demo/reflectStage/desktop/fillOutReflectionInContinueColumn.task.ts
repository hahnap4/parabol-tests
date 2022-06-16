import { 
    Actor, Task, Fill, Click, continueField, Press, randomStatement
} from '@index';

export class FillOutReflectionInContinueColumn extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(continueField),
            Fill.in(continueField, randomStatement),
            Press.key('Enter'),
            Press.key('Enter')
        );
}

    public static inApp(): FillOutReflectionInContinueColumn {
        return new FillOutReflectionInContinueColumn();
    }
}