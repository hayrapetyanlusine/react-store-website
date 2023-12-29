export interface OrderedProduct {
    orderItem: {
        url: string,
        quantity: string;
        product: string,
        price: string,
        productId: string,
        name: string,
        countInStock: string
    }[]
}