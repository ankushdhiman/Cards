import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ICardAction, ICardOptions, ICharacter } from '../../models/models';

@Component({
    selector: 'icards-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() cardOptions: ICardOptions;
    @Input() character: ICharacter;
    @Output() cardAction = new EventEmitter<ICardAction>();

    showButtonsBar: boolean;
    constructor(private element: ElementRef) {

    }

    Expand = (ev: Event) => {
        this.element.nativeElement.querySelector('div.card-popup').style.zIndex = 3;
        new Velocity(this.element.nativeElement.querySelector('div.card-container'),
            { margin: 0, height: 270, width: 270 }, { duration: 300 });
        new Velocity(this.element.nativeElement.querySelector('div.card-popup'),
            { top: 0, opacity: 0.5 }, { duration: 300 });
    };

    Shrink = () => {
        new Velocity(this.element.nativeElement.querySelector('div.card-container'),
            { margin: 10, height: 250, width: 250 }, { duration: 300 });
        new Velocity(this.element.nativeElement.querySelector('div.card-popup'),
            { top: 150, opacity: 0, zIndex: 0 }, { duration: 300, queue: false });
    };

    OpenCard = () => {
        this.cardAction.emit({ actionType: 'open', dataId: this.character.id });
    }

    DeleteCard = () => {
        this.cardAction.emit({ actionType: 'delete', dataId: this.character.id });
    }

    PrintCard = () => {
        this.cardAction.emit({ actionType: 'print', dataId: this.character.id });
    }

}
