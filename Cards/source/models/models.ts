export class ICardConfig {
    backGroundImage: string;
    popupOptions: IPopupOptions;
    headerText: string;
    description: string;
}

export class IPopupOptions {
    showOpen: boolean;
    showDelete: boolean;
    showPrint: boolean;
}

export class ICardAction {
    actionType: string;
    cardDataId: string;
}