import { Product } from 'lib/interface';

export const productMock: Product[] = [
  {
    productId: '1',
    name: 'Bread',
    price: 50,
    imageSrc:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    collection: 'bread'
  },
  {
    productId: '2',
    name: 'Tomatoes',
    price: 25,
    imageSrc:
      'https://images.unsplash.com/photo-1558818498-28c1e002b655?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    collection: 'vegetable'
  },
  {
    productId: '3',
    name: 'Oat Milk',
    price: 15,
    imageSrc:
      'https://images.unsplash.com/photo-1611423475621-2a1cd7e2750a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    collection: 'dairy'
  },
  {
    productId: '4',
    name: 'Eggs',
    price: 60,
    imageSrc:
      'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    collection: 'dairy'
  }
];
