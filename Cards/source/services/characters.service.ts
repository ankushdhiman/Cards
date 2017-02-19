import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ICharacter } from '../models/models';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CharactersService {

    charactersList: ICharacter[];

    constructor(private http: Http) {
        this.GetAllCharactersBasicInfo().subscribe(
            res => this.charactersList = res
        );
    }

    GetAllCharactersBasicInfo = (): Observable<ICharacter[]> => {
        return this.http.get('source/data/data.json').map(res => res.json());
    };

    GetInfoForSelectedCharacters = (id: number): ICharacter => {
        return this.charactersList[this.charactersList.findIndex((char) => { return char.id === id; })];
    };

    DeleteCharacterFromDataBase = (id: number) => {
        this.charactersList.splice(this.charactersList.findIndex((char) => { return char.id === id; }), 1);
    };
}
