import { Locator, Page } from '@playwright/test';
import { SelectorOptions, SubSelector } from '@index';

const subLocatorLookup = async ({
    page, locator, timeout, subSelector,
}: { page: Page; locator: Locator; timeout?: number; subSelector?: SubSelector }): Promise<Locator> => {
    let resolvedLocator: Locator = locator;
    // wait for selector to become visible based on timeout options
    await resolvedLocator.waitFor({ timeout });
    // check if we have subselectors
    if (subSelector) {
        resolvedLocator = resolvedLocator.locator(subSelector[0], { hasText: subSelector[1]?.hasText });
        // wait for sub selector to become visible based on timeout options
        await resolvedLocator.waitFor({ timeout });

        if (subSelector[1]?.subSelector) {
            resolvedLocator = await subLocatorLookup({
                page, locator: resolvedLocator, timeout: subSelector[1]?.timeout, subSelector: subSelector[1]?.subSelector,
            });
        }
    }
    return Promise.resolve(resolvedLocator);
};

export const recursiveLocatorLookup = async ({ page, selector, options }: { page: Page; selector: string; options?: SelectorOptions }): Promise<Locator> => {
    // find first level locator
    const locator = page.locator(selector, { hasText: options?.hasText });
    // pass the first level locator into sub locator lookup
    return subLocatorLookup({
        page, locator, timeout: options?.timeout, subSelector: options?.subSelector,
    });
};