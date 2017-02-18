import { Injectable } from '@angular/core';

import { ICardAction } from '../models/models';

@Injectable()
export class ModalService {
    showModal: boolean;
    showPrintModal: boolean;
    showConfirmationModal: boolean;
    showDetailsModal: boolean;

    configureModal = (actionData: ICardAction) => {
        this.showModal = true;
        switch (actionData.actionType) {
            case "open":
                this.configureDetailsModal(actionData.dataId);
                break;
            case "delete":
                this.configureConfirmationModal(actionData.dataId);
                break;
            case "print":
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
