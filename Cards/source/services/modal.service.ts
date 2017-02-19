import { Injectable } from '@angular/core';

import { ICardAction, ICharacter } from '../models/models';

import { CharactersService } from './characters.service';

@Injectable()
export class ModalService {
    showModal: boolean;
    showPrintModal: boolean;
    showConfirmationModal: boolean;
    showDetailsModal: boolean;
    selectedCharacter: ICharacter;
    constructor(private charactersService: CharactersService) {

    }
    configureModal = (actionData: ICardAction) => {
        this.selectedCharacter = this.charactersService.GetInfoForSelectedCharacters(actionData.dataId);
        this.showModal = true;
        switch (actionData.actionType) {
            case 'open':
                this.configureDetailsModal(actionData.dataId);
                break;
            case 'delete':
                this.configureConfirmationModal(actionData.dataId);
                break;
            case 'print':
                this.configurePrintModal(actionData.dataId);
                break;
        }
    }

    configureDetailsModal = (id: number) => {
        this.showConfirmationModal = false;
        this.showDetailsModal = true;
        this.showPrintModal = false;
    }

    configureConfirmationModal = (id: number) => {
        this.showConfirmationModal = true;
        this.showDetailsModal = false;
        this.showPrintModal = false;
    }

    configurePrintModal = (id: number) => {
        this.showConfirmationModal = false;
        this.showDetailsModal = false;
        this.showPrintModal = true;
    }
}
