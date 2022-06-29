import { 
    Actor, Task, Fill, Click, continueField, Press, randomStatement,
    Wait, thirdReflectionBox
} from '@index';

export class FillOutReflectionInContinueColumn extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(continueField),
            Fill.in(continueField, randomStatement),
            Wait.forLoadState('networkidle'),
            Press.key('Enter'),
            Press.key('Enter'),
            Wait.forSelector(thirdReflectionBox)
        );
}

    public static inApp(): FillOutReflectionInContinueColumn {
        return new FillOutReflectionInContinueColumn();
    }
}