import { Actor, Question, SelectorOptions, BrowseTheWeb } from '@index';

/**
 * Question Class. Get a specified state for a selector like visible or enabled.
 */
export class Element extends Question<boolean> {
    private mode: 'visible' | 'enabled' | 'hidden';

    private constructor(mode: 'visible' | 'enabled' | 'hidden', private selector: string, private options?: SelectorOptions & { wait?: boolean }) {
        super();
        this.mode = mode;
    }

    public answeredBy(actor: Actor): Promise<boolean> {
        if (this.mode === 'visible') {
            return BrowseTheWeb.as(actor).isVisible(this.selector, this.options);
        } if (this.mode === 'enabled') {
            return BrowseTheWeb.as(actor).isEnabled(this.selector, this.options);
        } if (this.mode === 'hidden') {
            return BrowseTheWeb.as(actor).isHidden(this.selector, this.options);
        }
        throw new Error('Unknown mode');
    }

    /**
     * Verifies if an element is visible.
     *
     * @param selector the selector
     * @param options (optional) advanced selector lookup options.
     */
    static isVisible(selector: string, options?: SelectorOptions & { wait?: boolean }): Element {
        const newOptions = { ...options };
        delete newOptions.wait;

        // it is possible to expect an instant availability
        // for that the option wait must explicitely set to false
        // the default to 1ms is a defacto instant
        if (options?.wait === false) { newOptions.timeout = 1; }

        return new Element('visible', selector, newOptions);
    }

    /**
     * Verifies if an element is enabled.
     *
     * @param selector the selector
     * @param options (optional) advanced selector lookup options.
     */
    static isEnabled(selector: string, options?: SelectorOptions): Element {
        return new Element('enabled', selector, options);
    }

    /**
     * Verifies if an element is hidden.
     * 
     * @param selector 
     * The selector.
     * 
     * @param options (optional)
     * Advanced selector lookup options.
     */
    static isHidden(selector: string, options?: SelectorOptions & { wait?: boolean }): Element {
        const newOptions = { ...options };
        delete newOptions.wait;

        /* It is possible to expect an instant availability 
        for that the option wait must explicitely set to false
        the default to 1ms is a defactor instant */

        if (options?.wait === false) { newOptions.timeout = 1; }

        return new Element('hidden', selector, newOptions);
    }
}