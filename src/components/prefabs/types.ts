export enum itemEnum {
    Tree,
    Wood
}

export type valueTypes = {
    count: number;
    name: string;
    type: itemEnum;
    icon: string;
    burnTime?: number;
}
