export enum itemEnum {
    Tree,
    Wood,
    Stone,
    Fire
}

export type valueTypes = {
    count: number;
    name: string;
    type: itemEnum;
    icon: string;
    burnTime?: number;
    level?: number;
}
