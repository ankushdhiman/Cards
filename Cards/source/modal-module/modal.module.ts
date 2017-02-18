
import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { ModalComponent }   from './modal-component/modal.component';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [ModalComponent],
    exports: [ModalComponent],
    providers: []
})
export class ModalModule { }
