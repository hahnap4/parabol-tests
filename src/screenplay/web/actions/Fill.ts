import { Action, Actor, SelectorOptions, BrowseTheWeb } from '@index';

// Fill an element specified by a selector string with the specified input.

export class Fill extends Action {
    private constructor(private locator: string, private input: string, private options?: SelectorOptions) {
        super();
    }

    /**
     * Find the specified selector and fill it.
     *
     * @param actor
     */
    public async performAs(actor: Actor): Promise<void> {
        return BrowseTheWeb.as(actor).fill(this.locator, this.input, this.options);
    }

    /**
     * Finds the specified selector and fill it with the specified input string.
     *
     * @param selector 
     * The selector.
     * 
     * @param input 
     * The input.
     * 
     * @param options (optional) 
     * Advanced selector lookup options.
     */
    public static in(selector: string, input: string, options?: SelectorOptions): Fill {
        return new Fill(selector, input, options);
    }

}