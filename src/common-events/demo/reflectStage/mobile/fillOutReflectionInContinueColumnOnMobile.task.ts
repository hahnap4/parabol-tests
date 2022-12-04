import { 
    Actor, Task, Fill, Click, continueFieldForMobile, Press, randomStatement,
    Wait
} from '@index';

export class FillOutReflectionInContinueColumnOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Click.on(continueFieldForMobile),
            Fill.in(continueFieldForMobile, randomStatement),
            Press.key('Enter'),
            Press.key('Enter'),
            Wait.forLoadState('load')
        );
}

    public static inApp(): FillOutReflectionInContinueColumnOnMobile {
        return new FillOutReflectionInContinueColumnOnMobile();
    }
}