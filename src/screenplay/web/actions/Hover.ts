import { Action, Actor } from '@testla/screenplay';
import { SelectorOptions, BrowseTheWeb } from '@index';
import { Locator } from '@playwright/test';

/**
 * Action Class. Hover over an element specified by a selector Locator.
 */
export class Hover extends Action {
    private constructor(private selector: Locator, private options?: SelectorOptions & { modifiers?: ('Alt' | 'Control' | 'Meta' | 'Shift')[] }) {
        super();
    }

    /**
     * find the specified selector and hover over it.
     *
     * @param actor
     */
    public performAs(actor: Actor): Promise<void> {
        return BrowseTheWeb.as(actor).hover(this.selector, this.options);
    }

    /**
     * Specify which selector should be hovered over
     *
     * @param selector The selector that should be hovered over.
     * @param options (optional) advanced selector lookup options + Modifier keys to press. Ensures that only these modifiers are pressed during the operation.
     */
    public static over(selector: Locator, options?: SelectorOptions & { modifiers?: ('Alt' | 'Control' | 'Meta' | 'Shift')[] }): Hover {
        return new Hover(selector, options);
    }
}