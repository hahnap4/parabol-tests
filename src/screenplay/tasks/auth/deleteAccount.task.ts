import { 
    Actor, Task, Wait, Click, Fill, DoubleClick, userIconButton, 
    goToMyProfileButton, deleteAccountButton, reasonForDeletionField, 
    goodbyeForeverButton
} from '@index';
import { reason } from '@data/test_data.json';

export class DeleteAccount extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Click.on(userIconButton),
            Click.on(goToMyProfileButton),
            Click.on(deleteAccountButton),
            Fill.in(reasonForDeletionField, reason),
            DoubleClick.on(goodbyeForeverButton),
            Wait.forLoadState('networkidle'),
        );
}

    public static onApp(): DeleteAccount {
        return new DeleteAccount();
    }
}