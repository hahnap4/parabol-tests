import { 
    Actor, Task, Navigate, Click, DoubleClick, Wait, closeTipsButton, startDemoButton, 
    tipsPopupBox , nextTopicButton
} from '@index';

export class StartDemoVotingStage extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('https://action-staging.parabol.co/retrospective-demo/reflect'),
            Click.on(startDemoButton),
            Wait.forLoadState('networkidle'),
            Wait.forSelector(tipsPopupBox),
            Click.on(closeTipsButton),
            DoubleClick.on(nextTopicButton),
            DoubleClick.on(nextTopicButton)
        );
}

    public static toApp(): StartDemoVotingStage {
        return new StartDemoVotingStage();
    }
}