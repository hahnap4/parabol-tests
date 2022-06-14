import { 
    Actor, Task, Fill, Click, continueFieldForMobile, Press, randomStatement
} from '@index';

export class FillOutReflectionInContinueColumnOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(continueFieldForMobile),
            Fill.in(continueFieldForMobile, randomStatement),
            Press.key('Enter'),
            Press.key('Enter')
        );
}

    public static inApp(): FillOutReflectionInContinueColumnOnMobile {
        return new FillOutReflectionInContinueColumnOnMobile();
    }
}