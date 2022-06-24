import { Page, Response } from '@playwright/test';
import { Ability, Actor } from '@testla/screenplay';
import { SelectorOptions, recursiveLocatorLookup } from '@index';

const { _android: android } = require('playwright');
const [mobile] = await android.devices();

/**
 * This class represents the actor's ability to use a Browser.
 */
export class BrowseTheWeb extends Ability {

    /**
     * Initialize this Ability by passing an already existing Playwright Page object.
     *
     * @param page the Playwright Page that will be used to browse.
     */
     private constructor(private page: Page) {
        super();
        this.page = page;
    }

    /**
     * Initialize this Ability by passing an already existing Playwright Page object.
     *
     * @param page the Playwright Page that will be used to browse.
     */
    public static using(page: Page): BrowseTheWeb {
        return new BrowseTheWeb(page);
    }

    /**
     * Use this Ability as an Actor.
     *
     * @param actor
     * 
     */
    public static as(actor: Actor): BrowseTheWeb {
        return actor.withAbilityTo(this) as BrowseTheWeb;
    }

    /**
     * Get the page object
     *
     * @returns the page object
     */
    public getPage(): Page {
        return this.page;
    }

    /**
     * Use the page to navigate to the specified URL.
     *
     * @param url the url to access.
     */
    public async navigate(url: string): Promise<Response | null> {
        return this.page.goto(url);
    }

    /**
     * Wait for the specified loading state.
     *
     * @param status the status to wait for. Allowed: "load" | "domcontentloaded" | "networkidle".
     */
    public async waitForLoadState(status: 'load' | 'domcontentloaded' | 'networkidle'): Promise<void> {
        return this.page.waitForLoadState(status);
    }

    /**
     * Use the page mouse to hover over the specified element.
     *
     * @param selector the selector of the element to hover over.
     * @param options (optional) advanced selector lookup options + Modifier keys to press. Ensures that only these modifiers are pressed during the operation.
     */
    public async hover(selector: string, options?: SelectorOptions & { modifiers?: ('Alt' | 'Control' | 'Meta' | 'Shift')[] }) {
        return (await recursiveLocatorLookup({ page: this.page, selector, options }))
            .hover({ modifiers: options?.modifiers });
    }

    /**
     * Press the specified key(s) on the keyboard.
     *
     * @param input the key(s). multiple keys can be pressed by concatenating with "+"
     */
    public async press(input: string): Promise<void> {
        return this.page.keyboard.press(input);
    }

    /**
     * Check the specified checkbox.
     *
     * @param selector the selector of the checkbox.
     * @param options (optional) advanced selector lookup options.
     */
    public async checkBox(selector: string, options?: SelectorOptions): Promise<void> {
        return (await recursiveLocatorLookup({ page: this.page, selector, options }))
            .check();
    }

    /**
     * Wait until the element of the specified selector exists.
     *
     * @param selector the selector of the element.
     * @param options (optional) advanced selector lookup options.
     */
    public async waitForSelector(selector: string, options?: SelectorOptions) {
        return recursiveLocatorLookup({ page: this.page, selector, options });
    }

    /**
     * Drag the specified source element to the specified target element and drop it.
     *
     * @param sourceSelector the selector of the source element.
     * @param targetSelector the selector of the target element.
     * @param options (optional) advanced selector lookup options.
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
     * @param selector the selector of the source element.
     * @param input the input to fill the element with.
     * @param options (optional) advanced selector lookup options.
     */
    public async fill(selector: string, input: string, options?: SelectorOptions) {
        return (await recursiveLocatorLookup({ page: this.page, selector, options }))
            .fill(input);
    }

    /**
     * Type the given input into the element specified by the selector.
     *
     * @param selector the selector of the source element.
     * @param input the input to type into the element.
     * @param options (optional) advanced selector lookup options.
     */
    public async type(selector: string, input: string, options?: SelectorOptions) {
        return (await recursiveLocatorLookup({ page: this.page, selector, options }))
            .type(input);
    }

    /**
     * Click the element specified by the selector.
     *
     * @param selector the selector of the element to click.
     * @param options (optional) advanced selector lookup options.
     */
    public async click(selector: string, options?: SelectorOptions) {
        return (await recursiveLocatorLookup({ page: this.page, selector, options }))
            .click();
    }

    /**
     * Double click the element specified by the selector.
     *
     * @param selector the selector of the element to double click.
     * @param options (optional) advanced selector lookup options.
     */
    public async dblclick(selector: string, options?: SelectorOptions) {
        return (await recursiveLocatorLookup({ page: this.page, selector, options }))
            .dblclick();
    }

    /**
     * Validate a locator on the page is visible.
     *
     * @param selector the locator to search for.
     * @param options (optional) advanced selector lookup options.
     * @returns true if the locator is visible, false otherwise.
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
     * Validate a locator on the page is enabled.
     *
     * @param selector the locator to search for.
     * @param options (optional) advanced selector lookup options.
     * @returns true if the element is enabled, false otherwise.
     */
    public async isEnabled(selector: string, options?: SelectorOptions): Promise<boolean> {
        try {
            return (await recursiveLocatorLookup({ page: this.page, selector, options }))
                .isEnabled();
        } catch (e) {
            return Promise.resolve(false);
        }
    }

    // find functionality by using playwright spicific code for our example
    public async find(locator: string): Promise<any> {
        return this.page.waitForSelector(locator);
    }

    /**
     * Click the element specified by the selector.
     *
     * @param selector the selector of the element to tap on.
     * @param options (optional) advanced selector lookup options.
     */
     public async tap(selector: string, options?: SelectorOptions) {
        return mobile.tap(selector, options);    
    }
}