import { Component } from '@angular/core';

import { ModalService } from '../../services/modal.service'

@Component({
    selector: 'icards-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    constructor(private modalService: ModalService){

    }
    closeModal = () => {
        this.modalService.showModal = false;
        this.modalService.showConfirmationModal = false;
        this.modalService.showDetailsModal = false;
        this.modalService.showPrintModal = false;
    };
}
