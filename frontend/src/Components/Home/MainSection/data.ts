import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

export const categories: MenuItem[] = [
  {
    label: "Women's Fashion",
    key: 'womens-fashion',
    children:[
      {type: 'group',
      label: 'Clothing',
    }
    ]
  },
  {
    label: "Men's Fashion",
    key: 'mens-fashion',
    children:[
      {type: 'group',
      label: 'Clothing',
    }
    ]
  
  },
  {
    label: 'Electronics',
    key: 'electronics',
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
  },
  {
    label: 'Medicine',
    key: 'medicine',
  },
  {
    label: 'Sports & Outdoor',
    key: 'sports-outdoor',
  },
  {
    label: "Baby’s & Toys",
    key: 'babys-toys',
  },
  {
    label: 'Groceries & Pets',
    key: 'groceries-pets',
  },
  {
    label: 'Health & Beauty',
    key: 'health-beauty',
  },
];