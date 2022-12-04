import { 
    Actor, Task, Wait, Navigate, Click, upgradeToProButtonOnOrgList, 
    upgradeToProButtonForMobile
} from '@index';

export class GoToUpgradeToProPageOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/me/organizations'),
            Click.on(upgradeToProButtonForMobile),
            Wait.forSelector(upgradeToProButtonOnOrgList),
            Click.on(upgradeToProButtonOnOrgList),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToUpgradeToProPageOnMobile {
        return new GoToUpgradeToProPageOnMobile();
    }
}