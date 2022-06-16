import { 
    Actor, Task, DoubleClick, endDemoButton
} from '@index';

export class EndDemoRetroMeeting extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            
            DoubleClick.on(endDemoButton)
        );
}

    public static inApp(): EndDemoRetroMeeting {
        return new EndDemoRetroMeeting();
    }
}