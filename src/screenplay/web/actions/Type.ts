import { Action, Actor, BrowseTheWeb } from '@index';

// Type specified input into an element specified by a selector string.

export class Type extends Action {
    private constructor(private selector: string, private text: string, private options?: {
        delay?: number | undefined;
        noWaitAfter?: boolean | undefined;
        strict?: boolean | undefined;
        timeout?: number | undefined;
    } | undefined) {
        super();
    }

    /**
     * Find the specified selector and fill it.
     *
     * @param actor
     */
    public async performAs(actor: Actor): Promise<void> {
        return BrowseTheWeb.as(actor).type(this.selector, this.text, this.options);
    }

    /**
     * Finds the specified selector and fill it with the specified input string.
     *
     * @param selector 
     * The selector.
     * 
     * @param text 
     * The input.
     * 
     * @param options (optional) 
     * Advanced selector lookup options.
     */
    public static in(selector: string, text: string, options?: {
        delay?: number | undefined;
        noWaitAfter?: boolean | undefined;
        strict?: boolean | undefined;
        timeout?: number | undefined;
    } | undefined): Type {
        return new Type(selector, text, options);
    }
}