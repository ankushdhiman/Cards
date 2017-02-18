export class ICardOptions {
    showOpen: boolean;
    showDelete: boolean;
    showPrint: boolean;
}

export class ICardAction {
    actionType: string;
    dataId: number;
}

export class ICharacter {
    id: number;
    name: string;
    house: string;
    description: string;
    image: string;
}