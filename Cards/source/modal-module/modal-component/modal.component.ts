import { Component, Output, EventEmitter } from '@angular/core';

import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'icards-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    @Output() modalAction = new EventEmitter<number>();

    constructor(private modalService: ModalService) {

    }
    closeModal = (ev: any) => {
        if (ev.target.className === 'modal-content-cards') {
            this.modalService.showModal = false;
            this.modalService.showConfirmationModal = false;
            this.modalService.showDetailsModal = false;
            this.modalService.showPrintModal = false;
        }
    };

    Delete = (confirm: boolean) => {
        if (confirm) {
            this.modalAction.emit(this.modalService.selectedCharacter.id);
        }
        this.modalService.showModal = false;
        this.modalService.showConfirmationModal = false;
        this.modalService.showDetailsModal = false;
        this.modalService.showPrintModal = false;
    }
}
