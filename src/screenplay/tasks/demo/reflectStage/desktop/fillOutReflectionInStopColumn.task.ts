import { 
    Actor, Task, Fill, Click, stopField, Press, randomStatement
} from '@index';

export class FillOutReflectionInStopColumn extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(stopField),
            Fill.in(stopField, randomStatement),
            Press.key('Enter'),
            Press.key('Enter')
        );
}

    public static inApp(): FillOutReflectionInStopColumn {
        return new FillOutReflectionInStopColumn();
    }
}