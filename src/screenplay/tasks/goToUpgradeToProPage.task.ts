import { 
    Actor, Task, Navigate, Click, upgradeToProButtonOnOrgList
} from '@index';

export class GoToUpgradeToProPage extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/me/organizations'),
            Click.on(upgradeToProButtonOnOrgList)
        );
}

    public static toApp(): GoToUpgradeToProPage {
        return new GoToUpgradeToProPage();
    }
}