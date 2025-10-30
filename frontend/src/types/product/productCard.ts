export type ProductCardProps = {
    id: number,
    name: string,
    category: string,
    price: number,
    inStock: boolean,
    sizes?: string[],
    oldPrice?: number,
    discount?: number,
    description: string,
    colours?: string[],
    rating: number,
    reviews: number,
    isNew: boolean,
    quantity: number,
    delivery: {
        freeDelivery: boolean,
        returnPolicy: string
    },
    image: string
}