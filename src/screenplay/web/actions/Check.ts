import { Action, Actor } from '@testla/screenplay';
import { SelectorOptions, BrowseTheWeb } from '@index';
import { Locator } from '@playwright/test';

/**
 * Action Class. Check a checkbox specified by a selector Locator.
 */
export class Check extends Action {
    private constructor(private selector: Locator, private options?: SelectorOptions) {
        super();
    }

    /**
     * find the specified selector and click on it.
     *
     * @param actor
     */
    public async performAs(actor: Actor): Promise<void> {
        await BrowseTheWeb.as(actor).checkBox(this.selector, this.options);
    }

    /**
     * specify which element should be clicked on
     *
     * @param selector the Locator representing the selector.
     * @param options (optional): advanced selector lookup options.
     */
    public static element(selector: Locator, options?: SelectorOptions): Check {
        return new Check(selector, options);
    }
}