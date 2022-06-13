import { 
    Actor, Task, Navigate, Wait, Click, upgradeToProButtonOnOrgList
} from '@index';

export class GoToUpgradeToProPage extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/me/organizations'),
            Click.on(upgradeToProButtonOnOrgList),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToUpgradeToProPage {{
        return new GoToUpgradeToProPage();
    }
}
}