import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';
import { ICardAction, ICardOptions, ICharacter } from './models/models';
import { CharactersService } from './services/characters.service';

@Component({
    selector: 'icards-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    cardsConfig: ICardOptions;
    characters: ICharacter[];
    showModal: boolean;

    constructor(private modalService: ModalService, private charactersService: CharactersService) {
        this.cardsConfig = { showDelete: true, showOpen: true, showPrint: true };
    }

    CardMessage = (actionData: ICardAction) => {
        this.showModal = true;
        this.modalService.configureModal(actionData);
    };

    ModalMessage = (id: number) => {
        this.charactersService.DeleteCharacterFromDataBase(id);
    };
}
