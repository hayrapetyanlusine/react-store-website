export interface FProduct {
    id: string,
    image: string,
    name: string,
    price: string,
    rating: string,
    category: {
        _id: string;
    };
}