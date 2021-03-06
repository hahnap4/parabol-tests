import { Action, Actor, SelectorOptions, BrowseTheWeb } from '@index';

// Click on an element specified by a selector string.

 export class DoubleClick extends Action {
    private constructor(private selector: string, private options?: SelectorOptions) {
        super();
    }

    /**
     * Find the specified selector and click on it.
     *
     * @param actor
     */
    public async performAs(actor: Actor): Promise<void> {
        await BrowseTheWeb.as(actor).dblclick(this.selector, this.options);
    }

    /**
     * Specify which element should be clicked on.
     *
     * @param selector 
     * The string representing the selector.
     * 
     * @param options (optional)
     * Advanced selector lookup options.
     */
    public static on(selector: string, options?: SelectorOptions): DoubleClick {
        return new DoubleClick(selector, options);
    }
}