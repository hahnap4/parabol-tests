import { Action, Actor } from '@testla/screenplay';
import { SelectorOptions, BrowseTheWeb } from '@index';

/**
 * Action Class. Click on an element specified by a selector string.
 */
export class Click extends Action {
    private constructor(private selector: string, private options?: SelectorOptions) {
        super();
    }

    /**
     * find the specified selector and click on it.
     *
     * @param actor
     */
    public async performAs(actor: Actor): Promise<void> {
        await BrowseTheWeb.as(actor).click(this.selector, this.options);
    }

    /**
     * specify which element should be clicked on
     *
     * @param selector the Locator representing the selector.
     * @param options (optional): advanced selector lookup options.
     */
    public static on(selector: string, options?: SelectorOptions): Click {
        return new Click(selector, options);
    }
}