import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'icards-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {

    constructor(private element: ElementRef) {

    }
    Expand = () => {
        new Velocity(this.element.nativeElement.querySelector('div.card-container'),
            { margin: 0, height: 270, width: 270 }, { duration: 300 });
        new Velocity(this.element.nativeElement.querySelector('div.card-popup'),
            { height: 100, opacity: 0.5 }, { duration: 300 });
    };
    Shrink = () => {
        new Velocity(this.element.nativeElement.querySelector('div.card-container'),
            { margin: 10, height: 250, width: 250, boxShadow: 10 }, { duration: 300 });
        new Velocity(this.element.nativeElement.querySelector('div.card-popup'),
            { height: 0, opacity: 0}, { duration: 500 });
    };
}
