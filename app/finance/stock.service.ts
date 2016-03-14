import { Injectable } from 'angular2/core';
import { Http, Jsonp, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class StockService {
    constructor(private _http: Http, private _jsonp: Jsonp) { }

    lookup(symbol: string) {
        let url = `http://finance.yahoo.com/webservice/v1/symbols/${symbol}/quote?format=json&view=detail&callback=JSONP_CALLBACK`;
        // .catch(...)

        return this._jsonp.get(url)
            .map(r => +r.json().list.resources[0].resource.fields.price);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}