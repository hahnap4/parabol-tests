import { Action, Actor, SelectorOptions, BrowseTheWeb } from '@index';

// Drag an element specified by a selector string and drop it on an element specified by another selector string.

export class DragAndDrop extends Action {
   private constructor(private sourceSelector: string, private targetSelector: string, private options?: {
       source?: SelectorOptions;
       target?: SelectorOptions;
   }) {
       super();
   }

   /**
    * Drag the specified selector and drop it on the target.
    */
   public performAs(actor: Actor): Promise<void> {
       return BrowseTheWeb.as(actor).dragAndDrop(this.sourceSelector, this.targetSelector, this.options);
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
   public static execute(sourceSelector: string, targetSelector: string, options?: {
       source?: SelectorOptions;
       target?: SelectorOptions;
   }): DragAndDrop {
       return new DragAndDrop(sourceSelector, targetSelector, options);
   }
}