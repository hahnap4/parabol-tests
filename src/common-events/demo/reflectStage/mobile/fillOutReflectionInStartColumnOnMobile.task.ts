import { 
    Actor, Task, Fill, Click, startFieldForMobile, Press, randomStatement,
    Wait
} from '@index';

export class FillOutReflectionInStartColumnOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(startFieldForMobile),
            Fill.in(startFieldForMobile, randomStatement),
            Press.key('Enter'),
            Press.key('Enter'),
            Wait.forLoadState('load')
        );
}

    public static inApp(): FillOutReflectionInStartColumnOnMobile {
        return new FillOutReflectionInStartColumnOnMobile();
    }
}
    
    