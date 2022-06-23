import { 
    Actor, Task, Click, includeIcebreakerCheckbox, selectAnotherTemplate,
    startMeetingButton, defaultTemplate, useTemplateButton, chosenTemplate
} from '@index';

export class MakeRetroMeeting extends Task {

    public async performAs(actor:Actor): Promise<any> {

        actor.attemptsTo(
            Click.on(includeIcebreakerCheckbox) // to Exclude Icebreaker
        );

        if (chosenTemplate.includes('Start, Stop, Continue')) {
            actor.attemptsTo(
                Click.on(selectAnotherTemplate),
                Click.on(defaultTemplate),
                Click.on(useTemplateButton),
                Click.on(startMeetingButton)
            )
        }
        else {
            actor.attemptsTo(
                Click.on(startMeetingButton)
            )
            }

        return;
}

    public static inApp(): MakeRetroMeeting {
        return new MakeRetroMeeting();
    }
}