import { 
    Actor, Task, Fill, Click, stopFieldForMobile, Press, randomStatement,
    Wait
} from '@index';

export class FillOutReflectionInStopColumnOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Click.on(stopFieldForMobile),
            Fill.in(stopFieldForMobile, randomStatement),
            Press.key('Enter'),
            Press.key('Enter'),
            Wait.forLoadState('load')
        );
}

    public static inApp(): FillOutReflectionInStopColumnOnMobile {
        return new FillOutReflectionInStopColumnOnMobile();
    }
}
