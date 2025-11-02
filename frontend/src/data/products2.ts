import type { ProductCardProps } from "@/types/product/productCard";

const fetchProducts = async () =>{
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data.products;
}

export const fetchProductById = async (id: number) =>{
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
}

const fetchCategories = async () =>{
  const response = await fetch('https://dummyjson.com/products/categories');
  const data = await response.json();
  const categories: string[] = data.map((category: any) => category.name.toLowerCase());
  return categories;
}

export const allProducts: ProductCardProps[] = await fetchProducts().then((products) => {
  return products.map((product: any) => ({
    id: product.id,
    name: product.title,
    category: product.category,
    price: product.price,
    inStock: true,
    sizes: [],
    description: product.description,
    colours: [],
    rating: product.rating,
    reviews: product.reviews.length,
    isNew: false,
    quantity: product.stock,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 30 Days Delivery Returns",
    },
    image: product.thumbnail,
    images: product.images,
  }));
});

export const allCategories: string[] = await fetchCategories();