import {Component} from 'angular2/core';

@Component({
    selector: 'my-component',
    template: '<h1>{{title}}</h1><h2>{{hero}} details!<h2>'
})
export class AppComponent {
    public title = 'Tour of Heros';
    public hero = 'Windstorm';
}