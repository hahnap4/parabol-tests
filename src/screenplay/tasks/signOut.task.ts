import { 
    Actor, Task, Wait, Navigate, Click, userIconButton, signOutButton 
} from '@index';

export class SignOut extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/'),
            Click.on(userIconButton),
            Click.on(signOutButton),
            Wait.forLoadState('networkidle'),
        );
}

    public static toApp(): SignOut {
        return new SignOut();
    }
}

//async gotoSignUpPage() {
//    await this.page.goto('/create-account');  
//}
//
//async gotoSignInPage() {
//  await this.page.goto('/');
//}