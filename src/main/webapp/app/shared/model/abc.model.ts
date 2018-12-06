export interface IAbc {
    id?: number;
    abcd?: string;
}

export class Abc implements IAbc {
    constructor(public id?: number, public abcd?: string) {}
}
