import { 
    Actor, Task, Fill, Click, startFieldForMobile, Press, randomStatement
} from '@index';

export class fillOutReflectionInStartColumnOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            Click.on(startFieldForMobile),
            Fill.in(startFieldForMobile, randomStatement),
            Press.key('Enter'),
            Press.key('Enter')
        );
}

    public static inApp(): fillOutReflectionInStartColumnOnMobile {
        return new fillOutReflectionInStartColumnOnMobile();
    }
}
    
    