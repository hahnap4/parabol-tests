import { Action, Actor, BrowseTheWeb } from '@index';

// Press the specified key on the keyboard.

export class Press extends Action {
    private constructor(private input: string) {
        super();
    }

    /**
     * Press the specified key.
     *
     * @param actor
     */
    public async performAs(actor: Actor): Promise<void> {
        return BrowseTheWeb.as(actor).press(this.input);
    }

    /**
     * Press a key (or multiple keys with `+`) on the keyboard. (e.g. Shift+A)
     *
     * @param keys 
     * The key(s) to press.
     */
    public static key(keys: string): Press {
        return new Press(keys);
    }
}