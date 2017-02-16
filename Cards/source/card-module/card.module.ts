
import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { CardComponent }   from './card-component/card.component';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [CardComponent],
    exports: [CardComponent],
    providers: []
})
export class CardModule { }
