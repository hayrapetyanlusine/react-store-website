export interface Product {
    id: string,
    name: string,
    rating: string,
    image: string,
    numReviews: number,
    category: {
        _id: string;
    };
}