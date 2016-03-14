import { Component } from 'angular2/core';
import { StockService } from './stock.service';

@Component({
    selector: 'stock-lookup',
    templateUrl: 'app/finance/stockLookup.component.html',
    providers: [StockService]
})
export class StockLookupComponent {
    constructor(private _stockService: StockService) { }

    tickerSymbol: string;
    price: number = 123.45;

    loadStockPrice(symbol) {
        this._stockService.lookup(symbol)
            .subscribe(p => {console.log(p); this.price = p});
    }
}