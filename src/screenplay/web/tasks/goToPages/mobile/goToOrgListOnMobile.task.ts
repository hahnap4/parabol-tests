import { 
    Actor, Task, Wait, Navigate, Click, upgradeToProButtonForMobile
} from '@index';

export class GoToOrgListOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Click.on(upgradeToProButtonForMobile),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToOrgListOnMobile {
        return new GoToOrgListOnMobile();
    }
}
