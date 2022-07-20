import { Action, Actor, BrowseTheWeb } from '@index';

// Click on an element specified by a selector string.
 
export class Click extends Action {
    private constructor(private selector: string, private options?: {
        button?: "left" | "right" | "middle" | undefined;
        clickCount?: number | undefined;
        delay?: number | undefined;
        force?: boolean | undefined;
        modifiers?: ("Alt" | "Control" | "Meta" | "Shift")[] | undefined;
        noWaitAfter: boolean | undefined;
        strict?: boolean | undefined;
        timeout?: number | undefined;
        trial?: boolean | undefined;
    } | undefined) {
        super();
    }

    /**
     * Find the specified selector and click on it.
     *
     * @param actor
     */
    public async performAs(actor: Actor): Promise<void> {
        await BrowseTheWeb.as(actor).click(this.selector, this.options);
    }

    /**
     * Specify which element should be clicked on
     *
     * @param selector 
     * The string representing the selector.
     * 
     * @param options (optional)
     * Advanced selector lookup options.
     */
    public static on(selector: string, options?: {
        button?: "left" | "right" | "middle" | undefined;
        clickCount?: number | undefined;
        delay?: number | undefined;
        force?: boolean | undefined;
        modifiers?: ("Alt" | "Control" | "Meta" | "Shift")[] | undefined;
        noWaitAfter: boolean | undefined;
        strict?: boolean | undefined;
        timeout?: number | undefined;
        trial?: boolean | undefined;
    } | undefined): Click {
        return new Click(selector, options);
    }
}