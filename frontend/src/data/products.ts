import type { ProductCardProps } from "@/types/product/productCard";
export const products: ProductCardProps[] = [
  {
    id: 1,
    name: "AK-900 Wired Keyboard",
    category: "electronic",
    price: 160,
    inStock: true,
    sizes: [],
    oldPrice: 170,
    discount: 35,
    description:
      "High-performance mechanical keyboard with RGB lighting and durable key switches.",
    colours: [],
    rating: 4.5,
    reviews: 123,
    isNew: false,
    quantity: 2,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 30 Days Delivery Returns",
    },
    image: "AK-900-Wired-Keyboard.png",
  },
  {
    id: 2,
    name: "ASUS FHD Gaming Laptop",
    category: "electronic",
    price: 700,
    oldPrice: 850,
    discount: 18,
    inStock: true,
    sizes: [],
    description:
      "Powerful FHD gaming laptop with high refresh rate display and RGB backlit keyboard.",
    colours: ["#000000", "#333333", "#1a1a1a"],
    rating: 4.8,
    reviews: 325,
    isNew: false,
    quantity: 5,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 30 Days Delivery Returns",
    },
    image: "ASUS-FHD-Gaming-Laptop.png",
  },

  {
    id: 4,
    name: "CANON EOS DSLR Camera",
    category: "electronic",
    price: 360,
    oldPrice: 420,
    discount: 14,
    inStock: true,
    sizes: [],
    description:
      "Professional DSLR camera with high resolution and advanced autofocus system.",
    colours: [],
    rating: 4.1,
    reviews: 95,
    isNew: false,
    quantity: 3,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 14 Days Return",
    },
    image: "CANON-EOS-DSLR-Camera.png",
  },
  {
    id: 5,
    name: "Curology Product Set",
    category: "beauty",
    price: 500,
    oldPrice: 600,
    discount: 17,
    inStock: true,
    sizes: [],
    description:
      "Complete skincare set designed to nourish and protect all skin types.",
    colours: [],
    rating: 4.3,
    reviews: 145,
    isNew: false,
    quantity: 15,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 30 Days Delivery Returns",
    },
    image: "Curology-Product-Set.png",
  },
  {
    id: 6,
    name: "GP11 Shooter USB Gamepad",
    category: "gaming",
    price: 660,
    oldPrice: 800,
    inStock: true,
    sizes: [],
    description:
      "Ergonomic USB gamepad with dual vibration motors and responsive controls.",
    colours: ["#DB4444", "#000000"],
    rating: 4.7,
    reviews: 55,
    isNew: true,
    quantity: 6,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 30 Days Delivery Returns",
    },
    image: "GP11-Shooter-USB-Gamepad.png",
  },
  {
    id: 7,
    name: "Gucci Duffle Bag",
    category: "fashion",
    price: 950,
    oldPrice: 1200,
    discount: 21,
    inStock: true,
    sizes: ["S", "M", "L"],
    description:
      "Premium Gucci duffle bag crafted from luxury materials for stylish travel.",
    colours: [],
    rating: 4.9,
    reviews: 75,
    isNew: false,
    quantity: 4,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 30 Days Delivery Returns",
    },
    image: "Gucci-duffle-bag.png",
  },
  {
    id: 8,
    name: "GUCCI INTENSE",
    category: "beauty",
    price: 450,
    oldPrice: 520,
    discount: 13,
    inStock: true,
    sizes: [],
    description:
      "Gucci INTENSE fragrance with deep, rich notes for a luxurious scent.",
    colours: ["#000000", "#D4AF37"],
    rating: 4.6,
    reviews: 60,
    isNew: false,
    quantity: 12,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 14 Days Return",
    },
    image: "GUCCI-INTENSE.png",
  },
  {
    id: 10,
    name: "HAVIT HV G92 Gamepad",
    category: "gaming",
    price: 120,
    oldPrice: 160,
    discount: 40,
    inStock: true,
    sizes: [],
    description:
      "Compact gaming controller with responsive buttons and plug-and-play setup.",
    colours: [],
    rating: 4.5,
    reviews: 88,
    isNew: false,
    quantity: 10,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 14 Days Return",
    },
    image: "HAVIT-HV-G92-Gamepad.png",
  },
  {
    id: 11,
    name: "IPS LCD Gaming Monitor",
    category: "electronic",
    price: 370,
    oldPrice: 400,
    discount: 30,
    inStock: true,
    sizes: [],
    description:
      "27-inch IPS LCD gaming monitor with ultra-low latency and vibrant colors.",
    colours: [],
    rating: 4.8,
    reviews: 99,
    isNew: false,
    quantity: 7,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 30 Days Delivery Returns",
    },
    image: "IPS-LCD-Gaming-Monitor.png",
  },
  {
    id: 12,
    name: "JBL Boombox Hero",
    category: "electronic",
    price: 1150,
    oldPrice: 1300,
    discount: 12,
    inStock: true,
    sizes: [],
    description:
      "Powerful JBL Boombox with deep bass and long battery life for outdoor fun.",
    colours: [],
    rating: 4.6,
    reviews: 120,
    isNew: false,
    quantity: 5,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 30 Days Delivery Returns",
    },
    image: "JBL-boombox-hero.png",
  },
  {
    id: 13,
    name: "Jr. Zoom Soccer Cleats",
    category: "sports",
    price: 1160,
    oldPrice: 1300,
    discount: 11,
    inStock: true,
    sizes: ["38", "39", "40", "41", "42"],
    description:
      "Durable soccer cleats offering excellent grip and comfort for young players.",
    colours: ["#EEFF61", "#000000"],
    rating: 4.4,
    reviews: 35,
    isNew: false,
    quantity: 6,
    delivery: {
      freeDelivery: false,
      returnPolicy: "Free 14 Days Return",
    },
    image: "Jr.Zoom-Soccer-Cleats.png",
  },
  {
    id: 14,
    name: "Kids Electric Car",
    category: "toys",
    price: 960,
    oldPrice: 1100,

    inStock: true,
    sizes: [],
    description:
      "Ride-on electric car for kids with realistic design and rechargeable battery.",
    colours: ["#FF0000", "#DB4444"],
    rating: 4.8,
    reviews: 65,
    isNew: true,
    quantity: 9,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 30 Days Delivery Returns",
    },
    image: "Kids-Electric-Car.png",
  },

  {
    id: 16,
    name: "Quilted Satin Jacket",
    category: "fashion",
    price: 660,
    oldPrice: 750,
    discount: 12,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Stylish quilted satin jacket with smooth lining and zipper closure.",
    colours: ["#184A48", "#DB4444"],
    rating: 4.4,
    reviews: 55,
    isNew: false,
    quantity: 5,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 14 Days Return",
    },
    image: "Quilted-Satin-Jacket.png",
  },
  {
    id: 17,
    name: "RGB Liquid CPU Cooler",
    category: "electronic",
    price: 160,
    oldPrice: 170,
    discount: 6,
    inStock: true,
    sizes: [],
    description:
      "High-efficiency liquid CPU cooler with RGB lighting and silent fans.",
    colours: [],
    rating: 4.9,
    reviews: 65,
    isNew: false,
    quantity: 8,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 30 Days Delivery Returns",
    },
    image: "RGB liquid-CPU-Cooler.png",
  },
  {
    id: 18,
    name: "S-Series Comfort Chair",
    category: "furniture",
    price: 240,
    oldPrice: 300,
    discount: 25,
    inStock: true,
    sizes: [],
    description:
      "Ergonomic comfort chair with lumbar support for office or home use.",
    colours: [],
    rating: 4.5,
    reviews: 72,
    isNew: false,
    quantity: 15,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 30 Days Delivery Returns",
    },
    image: "S-Series-Comfort-Chair.png",
  },
  {
    id: 19,
    name: "Small BookSelf",
    category: "furniture",
    price: 170,
    oldPrice: 200,
    discount: 15,
    inStock: true,
    sizes: [],
    description:
      "Compact wooden bookshelf suitable for bedrooms and study rooms.",
    colours: [],
    rating: 4.9,
    reviews: 45,
    isNew: false,
    quantity: 8,
    delivery: {
      freeDelivery: false,
      returnPolicy: "Free 14 Days Return",
    },
    image: "Small-BookSelf.png",
  },
  {
    id: 20,
    name: "Speakers",
    category: "electronic",
    price: 168,
    oldPrice: 200,
    discount: 16,
    inStock: true,
    sizes: [],
    description:
      "High-fidelity stereo speakers delivering crystal-clear sound and deep bass.",
    colours: ["#000000", "#444444"],
    rating: 4.6,
    reviews: 80,
    isNew: false,
    quantity: 6,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 30 Days Delivery Returns",
    },
    image: "speakers.png",
  },
  {
    id: 21,
    name: "The North Coat",
    category: "fashion",
    price: 348,
    oldPrice: 400,
    discount: 13,
    inStock: true,
    sizes: ["M", "L", "XL"],
    description:
      "Warm and durable North Coat designed for winter comfort and style.",
    colours: [],
    rating: 5,
    reviews: 90,
    isNew: false,
    quantity: 5,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 30 Days Delivery Returns",
    },
    image: "The-north-coat.png",
  },
  {
    id: 15,
    name: "PlayStation",
    category: "gaming",
    price: 500,
    oldPrice: 550,
    inStock: true,
    sizes: [],
    description:
      "Next-generation PlayStation console for ultimate gaming performance.",
    colours: [],
    rating: 3,
    reviews: 500,
    isNew: true,
    quantity: 10,
    delivery: {
      freeDelivery: true,
      returnPolicy: "Free 30 Days Delivery Returns",
    },
    image: "playstation.png",
  },
];

export const getAllProducts = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(products), 1000));
};

export const getFlashSaleProducts = async (): Promise<ProductCardProps[]> => {
  const flashSaleProducts = products.filter(
    (prod) => prod.discount && prod.discount >= 25
  );

  await new Promise((resolve) => setTimeout(resolve, 4000)); // simulate delay

  return flashSaleProducts;
};

export const getBestSellingProducts = async (): Promise<ProductCardProps[]> => {
  const flashSaleProducts = products.filter((prod) => prod.rating >= 4.9);

  await new Promise((resolve) => setTimeout(resolve, 4000)); // simulate delay

  return flashSaleProducts;
};

export const getOtherProducts = async (): Promise<ProductCardProps[]> => {
  let otherProducts: ProductCardProps[] = [];

  const notSaleProducts = products.filter((prod) => prod.rating < 4.5);
  const notFlashProducts = products.filter(
    (prod) => prod.discount && prod.discount < 25
  );

  otherProducts.push(...notSaleProducts);
  otherProducts.push(...notFlashProducts);

  return otherProducts;
};

export const getProductById = async (id: number) => {
  const product = products.find((prod) => prod.id === id);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return product;
};

export const getRelatedProducts = async (
  category: string
): Promise<ProductCardProps[]> => {
  await new Promise((res) => setTimeout(res, 500));
  return products.filter((p) => p.category === category).slice(0, 4);
};
