import { 
    Actor, Task, Navigate, Click, Wait, closeTipsButton, startDemoButton, tipsPopupBox 
} from '@index';

export class StartDemoReflectStage extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('https://action-staging.parabol.co/retrospective-demo/reflect'),
            Click.on(startDemoButton),
            Wait.forLoadState('networkidle'),
            Wait.forSelector(tipsPopupBox),
            Click.on(closeTipsButton)
        );
}

    public static toApp(): StartDemoReflectStage {
        return new StartDemoReflectStage();
    }
}