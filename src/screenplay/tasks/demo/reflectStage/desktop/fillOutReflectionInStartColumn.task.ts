import { 
    Actor, Task, Fill, Click, startField, Press, randomStatement
} from '@index';

export class fillOutReflectionInStartColumn extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(startField),
            Fill.in(startField, randomStatement),
            Press.key('Enter'),
            Press.key('Enter')
        );
}

    public static inApp(): fillOutReflectionInStartColumn {
        return new fillOutReflectionInStartColumn();
    }
}
    