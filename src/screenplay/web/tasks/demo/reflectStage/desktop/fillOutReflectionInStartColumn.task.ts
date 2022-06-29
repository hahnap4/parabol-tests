import { 
    Actor, Task, Fill, Click, startField, Press, randomStatement, Wait,
    firstReflectionBox
} from '@index';

export class FillOutReflectionInStartColumn extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(startField),
            Fill.in(startField, randomStatement),
            Wait.forLoadState('networkidle'),
            Press.key('Enter'),
            Press.key('Enter'),
            Wait.forSelector(firstReflectionBox)
        );
}

    public static inApp(): FillOutReflectionInStartColumn {
        return new FillOutReflectionInStartColumn();
    }
}
    