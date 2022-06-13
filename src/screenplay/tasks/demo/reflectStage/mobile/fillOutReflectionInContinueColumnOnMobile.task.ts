import { 
    Actor, Task, Fill, Click, continueFieldForMobile, Press, randomStatement
} from '@index';

export class fillOutReflectionInContinueColumnOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(continueFieldForMobile),
            Fill.in(continueFieldForMobile, randomStatement),
            Press.key('Enter'),
            Press.key('Enter')
        );
}

    public static inApp(): fillOutReflectionInContinueColumnOnMobile {
        return new fillOutReflectionInContinueColumnOnMobile();
    }
}