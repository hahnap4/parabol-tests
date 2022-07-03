import { 
    Actor, Task, Fill, Click, stopField, Press, randomStatement, Wait,
    secondReflectionBox
} from '@index';

export class FillOutReflectionInStopColumn extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(stopField),
            Fill.in(stopField, randomStatement),
            Wait.forLoadState('networkidle'),
            Press.key('Enter'),
            Press.key('Enter'),
            Wait.forSelector(secondReflectionBox)
        );
}

    public static inApp(): FillOutReflectionInStopColumn {
        return new FillOutReflectionInStopColumn();
    }
}