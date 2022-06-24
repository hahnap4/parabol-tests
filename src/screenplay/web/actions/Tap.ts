import { Action, Actor, SelectorOptions, BrowseTheWeb } from '@index';

/**
 * Action Class. tap on an element specified by a selector string.
 */
export class Tap extends Action {
    private constructor(private selector: string, private options?: SelectorOptions) {
        super();
    }

    /**
     * find the specified selector and tap on it.
     *
     * @param actor
     */
    public async performAs(actor: Actor): Promise<void> {
        await BrowseTheWeb.as(actor).tap(this.selector, this.options);
    }

    /**
     * specify which element should be tapped on
     *
     * @param selector the Locator representing the selector.
     * @param options (optional): advanced selector lookup options.
     */
    public static on(selector: string, options?: SelectorOptions): Tap {
        return new Tap(selector, options);
    }
}