import { 
    tripleDotForMessage, archiveMeeting
} from '@index';

export class RemoveMeetingSummaryMessage {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Click.on(tripleDotForMessage),
            Click.on(archiveMeeting)
        );
}

    public static inApp(): RemoveMeetingSummaryMessage {
        return new RemoveMeetingSummaryMessage();
    }
}