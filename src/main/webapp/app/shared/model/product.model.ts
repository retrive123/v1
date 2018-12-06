export interface IProduct {
    id?: number;
    productId?: number;
    productname?: string;
}

export class Product implements IProduct {
    constructor(public id?: number, public productId?: number, public productname?: string) {}
}
