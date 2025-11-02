export const allCategories = [
"Electronic",
"Beauty", 
"Gaming", 
"Fashion",
"Sports",
"Toys", 
"Furniture",
]



export const categories = [
  {
    label: "Women's Fashion",
    key: 'womens-fashion',
    href:"fashion",
    children:[
      {type: 'group',
      label: 'Clothing',
    }
    ]
  },
  {
    label: "Men's Fashion",
    key: 'mens-fashion',
    href:"fashion",
    children:[
      {type: 'group',
      label: 'Clothing',
    }
    ]
  
  },
  {
    label: 'Electronics',
    key: 'electronics',
    href:"electronic",
    children: [
      {
        type: 'group',
        label: 'Electronics',
        children: [
          { label: 'Phones', key: 'electronics:phones' },
          { label: 'Computers', key: 'electronics:computers' },
          { label: 'SmartWatch', key: 'electronics:smartwatch' },
          { label: 'Camera', key: 'electronics:camera' },
          { label: 'HeadPhones', key: 'electronics:headphones' },
          { label: 'Gaming', key: 'electronics:gaming' },
        ],
      },
    ],
  },
  {
    label: 'Home & Lifestyle',
    key: 'home-lifestyle',
    href:"home-lifestyle",
  },
  {
    label: 'Medicine',
    key: 'medicine',
    href:"medicine",
  },
  {
    label: 'Sports & Outdoor',
    key: 'sports-outdoor',
  },
  {
    label: "Baby’s & Toys",
    key: 'babys-toys',
    href:"toys",
  },
  {
    label: 'Groceries & Pets',
    key: 'groceries-pets',
    href:"groceries-pets",
  },
  {
    label: 'Health & Beauty',
    key: 'health-beauty',
    href:"health-beauty",
  },
];