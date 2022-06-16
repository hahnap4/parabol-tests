import { Action, Actor, BrowseTheWeb } from '@index';

/**
 * Action Class. Navigate to a URL using the specified url string.
 */
export class Navigate extends Action {

    private constructor(private url: string) {
        super();
        this.url = url;
    }

    /**
     * navigate to the specified URL.
     *
     * @param actor
     */
    public performAs(actor: Actor): Promise<any> {
        return BrowseTheWeb.as(actor).navigate(this.url);
    }

    /**
     * Use the page to navigate to a certain URL.
     *
     * @param url the url which should be accessed.
     */
    public static to(url: string): Navigate {
        return new Navigate(url);
    }
}