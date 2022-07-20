import { Action, Actor, SelectorOptions, BrowseTheWeb } from '@index';

// Check a checkbox specified by a selector string.

export class Checkmark extends Action {
    private constructor(private selector: string, private options?: SelectorOptions) {
        super();
    }

    /**
     * Find the specified selector and click on it.
     *
     * @param actor
     */
    public async performAs(actor: Actor): Promise<void> {
        await BrowseTheWeb.as(actor).checkBox(this.selector, this.options);
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
    public static element(selector: string, options?: SelectorOptions): Checkmark {
        return new Checkmark(selector, options);
    }
}