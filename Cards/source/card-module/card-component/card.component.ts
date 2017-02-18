import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ICardConfig, ICardAction } from '../../models/models';

@Component({
    selector: 'icards-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() cardConfig: ICardConfig;
    @Output() cardAction: EventEmitter<ICardAction>;

    showButtonsBar: boolean;
    constructor(private element: ElementRef) {

    }

    Expand = () => {
        this.element.nativeElement.querySelector('div.card-popup').style.zIndex = 3;
        new Velocity(this.element.nativeElement.querySelector('div.card-container'),
            { margin: 0, height: 270, width: 270 }, { duration: 300 });
        new Velocity(this.element.nativeElement.querySelector('div.card-popup'),
            { height: 100, opacity: 0.5 }, { duration: 300 });
    };

    Shrink = () => {
        new Velocity(this.element.nativeElement.querySelector('div.card-container'),
            { margin: 10, height: 250, width: 250 }, { duration: 300 });
        new Velocity(this.element.nativeElement.querySelector('div.card-popup'),
            { height: 0, opacity: 0, zIndex: 0 }, { duration: 500, queue: false });
    };

    OpenCard = () => {
        this.cardAction.emit({ actionType: "open", cardDataId: "" });
    }

    DeleteCard = () => {
        this.cardAction.emit({ actionType: "delete", cardDataId: "" });
    }

    PrintCard = () => {
        this.cardAction.emit({ actionType: "print", cardDataId: "" });
    }

}
