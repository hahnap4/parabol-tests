import { Action, Actor, BrowseTheWeb } from '@index';

// Navigate to a URL using the specified url string.

export class Navigate extends Action {
   private constructor(private url: string) {
       super();
   }

   /**
    * Navigate to the specified URL.
    *
    * @param actor
    */
   public performAs(actor: Actor): Promise<any> {
       return BrowseTheWeb.as(actor).goto(this.url);
   }

   /**
    * Use the page to navigate to a certain URL.
    *
    * @param url 
    * The url which should be accessed.
    */
   public static to(url: string): Navigate {
       return new Navigate(url);
   }
}