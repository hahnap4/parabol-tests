import { Page, Response } from '@playwright/test';
import { Ability, Actor, SelectorOptions, recursiveLocatorLookup } from '@index';

/**
 * This class represents the actor's ability to use a Browser.
 */
export class BrowseTheWeb extends Ability {

    /**
     * Initialize this Ability by passing an already existing Playwright Page Object.
     * @param page 
     * The above is the Playwright Page that will be used to browse.
     */
    public static using(page: Page): BrowseTheWeb {
        return new BrowseTheWeb(page);
    }

    /**
     * Use this Ability as an Actor.
     * @param actor
     */
    public static as(actor: Actor): BrowseTheWeb {
        return actor.withAbilityTo(this) as BrowseTheWeb;
    }

    /**
     * @param page 
     */
    private constructor(private page: Page) {
        super();
    }

    /**
     * Get the page object.
     * @returns 
     * The page object.
     */
    public getPage(): Page {
        return this.page;
    }

    /**
     * Use the page to navigate to the specified URL.
     * @param url 
     * The url to access.
     * 
     * @param options
     */
    public async goto(url: string, options?: {
        referer?: string | undefined;
        timeout?: number | undefined;
        waitUntil?: "load" | "domcontentloaded" | "networkidle" | "commit" | undefined;
    } | undefined): Promise<null|Response> {
        return this.page.goto(url, options);
    }

    /**
     * Wait for the specified loading state.
     * @param state 
     * The status to wait for. 
     * Allowed: "load" | "domcontentloaded" | "networkidle".
     * 
     * @param options
     */
    public async waitForLoadState(state?: 'load' | 'domcontentloaded' | 'networkidle' | undefined, options?: {
        timeout?: number | undefined;
    } | undefined): Promise<void> {
        return this.page.waitForLoadState(state, options);
    }

    /**
     * Use the page mouse to hover over the specified element.
     * @param selector 
     * The selector of the element to hover over.
     * 
     * @param options (optional) 
     * Advanced selector lookup options + Modifier keys to press. 
     * Ensures that only these modifiers are pressed during the operation.
     */
    public async hover(selector: string, options?: SelectorOptions & { modifiers?: ('Alt' | 'Control' | 'Meta' | 'Shift')[] }) {
        return (await recursiveLocatorLookup({ page: this.page, selector, options }))
            .hover({ modifiers: options?.modifiers });
    }

    /**
     * Press the specified key(s) on the keyboard.
     * @param input 
     * The key(s). 
     * Multiple keys can be pressed by concatenating with "+"
     */
    public async press(input: string): Promise<void> {
        return this.page.keyboard.press(input);
    }

    /**
     * Check the specified checkbox.
     * 
     * @param selector 
     * The selector of the checkbox.
     * 
     * @param options (optional) 
     * Advanced selector lookup options.
     */
    public async checkBox(selector: string, options?: SelectorOptions): Promise<void> {
        return (await recursiveLocatorLookup({ page: this.page, selector, options }))
            .check();
    }

    /**
     * Wait until the element of the specified selector exists.
     *
     * @param selector 
     * The selector of the element.
     * 
     * @param options (optional) 
     * Advanced selector lookup options.
     */
    public async waitForSelector(selector: string, options?: SelectorOptions | undefined): Promise<any> {
        await recursiveLocatorLookup({ page: this.page, selector, options });
        return this.page.waitForSelector(selector, options); 
    }

    /**
     * Drag the specified source element to the specified target element and drop it.
     *
     * @param sourceSelector 
     * The selector of the source element.
     * 
     * @param targetSelector 
     * The selector of the target element.
     * 
     * @param options (optional) 
     * Advanced selector lookup options.
     */
    public async dragAndDrop(sourceSelector: string, targetSelector: string, options?: {
        source?: SelectorOptions;
        target?: SelectorOptions;
    }) {
        const target = await recursiveLocatorLookup({ page: this.page, selector: targetSelector, options: options?.target });
        return (await recursiveLocatorLookup({ page: this.page, selector: sourceSelector, options: options?.source }))
            .dragTo(target, { targetPosition: { x: 0, y: 0 } });
    }

    /**
     * Fill the element specified by the selector with the given input.
     *
     * @param selector 
     * The selector of the source element.
     * 
     * @param input 
     * The input to fill the element with.
     * 
     * @param options (optional) 
     * Advanced selector lookup options.
     */
    public async fill(selector: string, input: string, options?: SelectorOptions) {
        return (await recursiveLocatorLookup({ page: this.page, selector, options }))
            .fill(input);
    }

    /**
     * Type the given input into the element specified by the selector.
     *
     * @param selector
     * 
     * @param text 
     * 
     * @param options (optional) 
     * Advanced selector lookup options.
     */
    public async type(selector: string, text: string, options?: {
        delay?: number | undefined;
        noWaitAfter?: boolean | undefined;
        strict?: boolean | undefined;
        timeout?: number | undefined;
    } | undefined): Promise<void> {
        return this.page.type(selector, text, options);
    }

    /**
     * Click the element specified by the selector.
     *
     * @param selector 
     * The selector of the element to click.
     * 
     * @param options (optional) 
     * Advanced selector lookup options.
     */
    public async click(selector: string, options?: {
        button?: "left" | "right" | "middle" | undefined;
        clickCount?: number | undefined;
        delay?: number | undefined;
        force?: boolean | undefined;
        modifiers?: ("Alt" | "Control" | "Meta" | "Shift")[] | undefined;
        noWaitAfter: boolean | undefined;
        strict?: boolean | undefined;
        timeout?: number | undefined;
        trial?: boolean | undefined;
    } | undefined): Promise<void> {
        return this.page.click(selector, options);
    }

    /**
     * Double click the element specified by the selector.
     *
     * @param selector 
     * The selector of the element to double click.
     * 
     * @param options (optional) 
     * Advanced selector lookup options.
     */
    public async dblclick(selector: string, options?: SelectorOptions) {
        return (await recursiveLocatorLookup({ page: this.page, selector, options }))
            .dblclick();
    }

    /**
     * Validate a locator on the page is visible.
     *
     * @param selector 
     * The locator to search for.
     * 
     * @param options (optional) 
     * Advanced selector lookup options.
     * 
     * @returns 
     * True if the locator is visible, false otherwise.
     */
    public async isVisible(selector: string, options?: SelectorOptions): Promise<boolean> {
        try {
            await recursiveLocatorLookup({ page: this.page, selector, options });
            return Promise.resolve(true);
        } catch (e) {
            return Promise.resolve(false);
        }
    }

    /**
     * Validate a locator on the page is hidden.
     *
     * @param selector 
     * The locator to search for.
     * 
     * @param options (optional) 
     * Advanced selector lookup options.
     * 
     * @returns 
     * True if the locator is visible, false otherwise.
     */
     public async isHidden(selector: string, options?: {
        strict?: boolean | undefined;
        timeout?: number | undefined;
    } | undefined): Promise<boolean> {
            return this.page.isHidden(selector, options);
    }

    /**
     * Validate a locator on the page is enabled.
     *
     * @param selector 
     * The locator to search for.
     * 
     * @param options (optional) 
     * Advanced selector lookup options.
     * 
     * @returns 
     * True if the element is enabled, false otherwise.
     */
    public async isEnabled(selector: string, options?: SelectorOptions): Promise<boolean> {
        try {
            return (await recursiveLocatorLookup({ page: this.page, selector, options }))
                .isEnabled();
        } catch (e) {
            return Promise.resolve(false);
        }
    }

     /**
     * Specify which choice should be chosen
     *
     * @param selector
     * The string representing the list of options.
     * 
     * @param values 
     * The string you want to select from the list of options
     * 
     * @param options
     */
     public async selectOption(selector: string, values: string | string[] | {
        value?: string | undefined;
        label?: string | undefined;
        index?: number | undefined;
    } | null, options?: {
        force?: boolean | undefined;
        noWaitAfter?: boolean | undefined;
        strict?: boolean | undefined;
        timeout?: number | undefined;
    } | undefined): Promise<Array<string>>{
        return this.page.selectOption(selector, values, options);
    }

    /**
     * Wait for event to fire.
     *
     * @param event
     * 
     * @param optionsOrPredicate
     * 
     * @param options
     */
    public async waitForEvent(event: "close", optionsOrPredicate?: {
        predicate?: ((page: Page) => boolean | Promise<boolean>) | undefined;
        timeout?: number | undefined; 
    } | undefined, options?: {
            predicate?: ((page: Page) => boolean | Promise<boolean>) | undefined;
    }): Promise<Object> {
            return this.page.waitForEvent(event, optionsOrPredicate);
    }

    /**
     * Wait for page to navigate to given URL to fire.
     *
     * @param url
     * 
     * @param options
     *
     */
    public async waitForURL(url: string, options?: {
        timeout?: number | undefined;
        waitUntil?: "load" | "domcontentloaded" | "networkidle" | "commit" | undefined;
    } | undefined): Promise<void> {
        return this.page.waitForURL(url, options);
    }

    /**
     * Validate the locator is checkmarked.
     * 
     * @param selector
     * The locator
     * 
     * @param options (optional)
     * Advanced selector lookup options
     * 
     * 
     * @returns
     * True if the locator is checkmarked, false otherwise
     */
     public async isCheckmarked(selector: string, options?: SelectorOptions): Promise<boolean> {
        try {
            return (await recursiveLocatorLookup({ page: this.page, selector, options }))
                .isChecked();
        } catch (e) {
            return Promise.resolve(false);
        }
    }
    
}