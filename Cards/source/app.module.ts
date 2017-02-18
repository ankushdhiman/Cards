
import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }   from './app.component';
import { CardModule }   from './card-module/card.module';
import { ModalModule }   from './modal-module/modal.module';

// Services
import { CharactersService }   from './services/characters.service';
import { ModalService } from './services/modal.service'

@NgModule({
    imports: [BrowserModule, HttpModule, CardModule, ModalModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [CharactersService, ModalService]
})
export class AppModule { }
