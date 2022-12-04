import { 
    Actor, Task, Click, selectAnotherTemplate, startStopContinueTemplate, 
    useTemplateButton,
} from '@index';

export class ChangeTemplate extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
                Click.on(selectAnotherTemplate),
                Click.on(startStopContinueTemplate),
                Click.on(useTemplateButton)
        );
}

    public static inApp(): ChangeTemplate {
        return new ChangeTemplate();
    }
}