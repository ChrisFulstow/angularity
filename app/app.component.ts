import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router'; 
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from 'angular2/http';
import { StockLookupComponent } from './finance/stockLookup.component';
import { KnobComponent } from './charts/knob.component';

@Component({
    selector: 'angularity-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, JSONP_PROVIDERS]
})
@RouteConfig([
    { path: '/stock', name: 'StockLookup', component: StockLookupComponent },
    { path: '/knob', name: 'Knob', component: KnobComponent }
])
export class AppComponent {
    title: string = 'Angularity';
}