import { 
    Actor, Task, Fill, Click, stopFieldForMobile, Press, randomStatement
} from '@index';

export class FillOutReflectionInStopColumnOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(stopFieldForMobile),
            Fill.in(stopFieldForMobile, randomStatement),
            Press.key('Enter'),
            Press.key('Enter')
        );
}

    public static inApp(): FillOutReflectionInStopColumnOnMobile {
        return new FillOutReflectionInStopColumnOnMobile();
    }
}
