import { Action, Actor } from '@testla/screenplay';
import { SelectorOptions, BrowseTheWeb } from '@index';
import { Locator } from '@playwright/test';

/**
 * Action Class. DragAndDrop an element specified by a selector Locator and drop it on an element specified by another
 * selector Locator.
 */
export class DragAndDrop extends Action {
    private constructor(private sourceSelector: Locator, private targetSelector: Locator, private options?: {
        source?: SelectorOptions;
        target?: SelectorOptions;
    }) {
        super();
    }

    /**
     * drag the specified selector and drop it on the target.
     */
    public performAs(actor: Actor): Promise<void> {
        return BrowseTheWeb.as(actor).dragAndDrop(this.sourceSelector, this.targetSelector, this.options);
    }

    /**
     * Drag the specified source element to the specified target element and drop it.
     *
     * @param sourceSelector the selector of the source element.
     * @param targetSelector the selector of the target element.
     * @param options (optional) advanced selector lookup options.
     */
    public static execute(sourceSelector: Locator, targetSelector: Locator, options?: {
        source?: SelectorOptions;
        target?: SelectorOptions;
    }): DragAndDrop {
        return new DragAndDrop(sourceSelector, targetSelector, options);
    }
}