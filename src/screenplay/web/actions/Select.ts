import { Action, Actor, BrowseTheWeb } from '@index';

// Select on an element specified by a selector string.
 
export class Select extends Action {
    private constructor(private selector: string, private values: string | string[] | {
        value?: string | undefined;
        label?: string | undefined;
        index?: number | undefined;
    } | null, private options?: {
        force?: boolean | undefined;
        noWaitAfter?: boolean | undefined;
        strict?: boolean | undefined;
        timeout?: number | undefined;
    } | undefined) {
        super();
    }

    /**
     * Find the specified selector and select it.
     *
     * @param actor
     */
    public async performAs(actor: Actor): Promise<void> {
        await BrowseTheWeb.as(actor).selectOption(this.selector, this.values, this.options);
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
     * Advanced selector lookup options.
     */
    public static option(selector: string, values: string | string[] | {
        value?: string | undefined;
        label?: string | undefined;
        index?: number | undefined;
    } | null, options?: {
        force?: boolean | undefined;
        noWaitAfter?: boolean | undefined;
        strict?: boolean | undefined;
        timeout?: number | undefined;
    } | undefined): Select {
        return new Select(selector, values, options);
    }
}