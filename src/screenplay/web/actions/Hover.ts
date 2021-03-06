import { Action, Actor, SelectorOptions, BrowseTheWeb } from '@index';

// Hover over an element specified by a selector string.

export class Hover extends Action {
    private constructor(private selector: string, private options?: SelectorOptions & { modifiers?: ('Alt' | 'Control' | 'Meta' | 'Shift')[] }) {
        super();
    }

    /**
     * Find the specified selector and hover over it.
     *
     * @param actor
     */
    public performAs(actor: Actor): Promise<void> {
        return BrowseTheWeb.as(actor).hover(this.selector, this.options);
    }

    /**
     * Specify which selector should be hovered over.
     *
     * @param selector 
     * The selector that should be hovered over.
     * 
     * @param options (optional) 
     * Advanced selector lookup options + Modifier keys to press. 
     * Ensures that only these modifiers are pressed during the operation.
     */
    public static over(selector: string, options?: SelectorOptions & { modifiers?: ('Alt' | 'Control' | 'Meta' | 'Shift')[] }): Hover {
        return new Hover(selector, options);
    }
}