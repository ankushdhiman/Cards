
import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }   from './app.component';
import { CardModule }   from './card-module/card.module';
import { ModalModule }   from './modal-module/modal.module';

// Services
@NgModule({
    imports: [BrowserModule, HttpModule, CardModule, ModalModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }
