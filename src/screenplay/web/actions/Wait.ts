import { Action, Actor, SelectorOptions, BrowseTheWeb } from '@index';

// Wait for either a specified loading state OR selector OR event OR url to become visible/active.

export class Wait extends Action {

    // Only 1 property is active at all times.
    private action: {
        mode: 'selector' | 'loadState' | 'event' | 'url';
        payload?: any;
    };

    private constructor(action: { mode: 'selector' | 'loadState' | 'event' | 'url', payload?: any }) {
        super();
        this.action = action;
    }

    /**
     * Wait for either a specified loading state or for a selector to become visible/active.
     *
     * @param actor
     */
    public performAs(actor: Actor): Promise<any> {
        if (this.action.mode === 'loadState') {
            return BrowseTheWeb.as(actor).waitForLoadState(this.action.payload.state, this.action.payload.options);
        }
        if (this.action.mode === 'selector') {
            return BrowseTheWeb.as(actor).waitForSelector(this.action.payload.selector, this.action.payload.options);
        }
        if (this.action.mode === 'event') {
            return BrowseTheWeb.as(actor).waitForEvent(this.action.payload.event, this.action.payload.options);
        }
        if (this.action.mode === 'url') {
            return BrowseTheWeb.as(actor).waitForURL(this.action.payload.url, this.action.payload.options);
        }
        throw new Error('Error: no match for Wait.performAs()!');
    }

    /**
     * Wait for a specific status of the page.
     *
     * @param state 
     * Either 'load', 'domcontentloaded', or 'networkidle'
     */
    public static forLoadState(state: 'load' | 'domcontentloaded' | 'networkidle'): Wait {
        return new Wait({ mode: 'loadState', payload: { state } });
    }

    /**
     * Wait for a specific selector to exist.
     *
     * @param selector 
     * The selector.
     * 
     * @param options (optional) 
     * Advanced selector lookup options.
     */
    public static forSelector(selector: string, options?: SelectorOptions): Wait {
        return new Wait({ mode: 'selector', payload: { selector, options } });
    }

    /**
     * Wait for an event to fire.
     *
     * @param event 
     */
     public static forEvent(event: "close", optionsOrPredicate?: {
        timeout?: number | undefined; 
    } | undefined): Wait {
        return new Wait({ mode: 'event', payload: { event } });
    }

    /**
     * Wait for the page to navigate to the specified URL.
     *
     * @param url 
     */
     public static forURL(url: string, options?: {
        timeout?: number | undefined;
        waitUntil?: "load" | "domcontentloaded" | "networkidle" | "commit" | undefined;
    } | undefined): Wait {
        return new Wait({ mode: 'url', payload: { url } });
    }
}