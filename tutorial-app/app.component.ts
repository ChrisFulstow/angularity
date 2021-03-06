import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Component}          from 'angular2/core';

import {HeroesComponent}    from './heroes.component';
import {HeroService}        from './hero.service';
import {DashboardComponent} from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Heroes']">Heroes</a>
        </nav>
        <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService,
        ROUTER_PROVIDERS
    ],
    styleUrls: ['app/app.component.css']
})
@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
])
export class AppComponent {
    title = 'Tour of Heroes';
}