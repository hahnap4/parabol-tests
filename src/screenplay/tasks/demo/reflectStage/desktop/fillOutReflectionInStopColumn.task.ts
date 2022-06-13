import { 
    Actor, Task, Fill, Click, stopField, Press, randomStatement
} from '@index';

export class fillOutReflectionInStopColumn extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(stopField),
            Fill.in(stopField, randomStatement),
            Press.key('Enter'),
            Press.key('Enter')
        );
}

    public static inApp(): fillOutReflectionInStopColumn {
        return new fillOutReflectionInStopColumn();
    }
}