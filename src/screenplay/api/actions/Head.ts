import { Actor } from '@testla/screenplay';
import { 
    REQUEST_METHOD, UseAPI, Headers, Response, ResponseBodyFormat, ARequest
} from '@index';

/**
 * Action Class. Send a HTTP HEAD Request.
 */
export class Head extends ARequest {
    private responseBodyFormat: ResponseBodyFormat = 'json';

    private constructor(private url: string) {
        super();
    }

    /**
     * Send a HTTP HEAD request to the specified url.
     *
     * @param actor
     */
    public async performAs(actor: Actor): Promise<Response> {
        return UseAPI.as(actor).sendRequest(REQUEST_METHOD.GET, this.url, this.headers, this.responseBodyFormat);
    }

    /**
     * Send a HTTP head request to the specified url.
     *
     * @param url the URL of the target.
     */
    public static from(url: string): Head {
        return new Head(url);
    }

    /**
     * Add headers to the HTTP HEAD request to send.
     *
     * @param headers the headers.
     */
    public withHeaders(headers: Headers): Head {
        this.headers = headers;
        return this;
    }

    /**
     * Set the format the response body should be returned as.
     *
     * @param responseBodyFormat the format of the response body.
     */
    public withResponseBodyFormat(responseBodyFormat: ResponseBodyFormat): Head {
        this.responseBodyFormat = responseBodyFormat;
        return this;
    }
}