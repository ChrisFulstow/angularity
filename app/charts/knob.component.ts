import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'knob',
    templateUrl: 'app/charts/knob.component.html',
})
export class KnobComponent implements OnInit {
    ngOnInit() {
        $(".dial").knob();
    }
    // AfterViewInit ?
}