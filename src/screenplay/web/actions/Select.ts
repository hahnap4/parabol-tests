import { Action, Actor, SelectorOptions, BrowseTheWeb } from '@index';

// Select an element specified by the selector string.

export class Select extends Action {
    private constructor(private selector: string, private targetSelector: string, private options?: {
        source?: SelectorOptions;
        target?: SelectorOptions;
    }) {
        super();
    }


/**
 * Find the specificed selector and select it
 * 
 * @param actor
 */
public async performAs(actor: Actor): Promise<void> {
    await BrowseTheWeb.as(actor).selectOption(this.selector, this.targetSelector);
}

/**
 * Specify which element should be chosen
 * @param selector 
 * The string representing the list of options.
 * 
 * @param targetSelector
 * The string you want to select from the list of options
 * 
 * @param options (optional)
 * Advanced selector lookup options
 */
public static option(selector: string, targetSelector: string, options?: SelectorOptions): Select {
    return new Select(selector, targetSelector);
}

}