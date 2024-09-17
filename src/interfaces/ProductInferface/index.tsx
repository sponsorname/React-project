interface ProductInterface {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating: { rate: number; count: number };
}

export default ProductInterface