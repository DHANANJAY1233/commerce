export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
];

export enum CollectionCodes {
  DAIRY = 'dairy',
  BREAD = 'bread',
  VEG = 'vegetable'
}

export const collections = [
  {
    title: 'Egg and Dairy Products',
    collectionCode: CollectionCodes.DAIRY
  },
  {
    title: 'Bread and Bakery',
    collectionCode: CollectionCodes.BREAD
  },
  {
    title: 'Fruits and Vegetables',
    collectionCode: CollectionCodes.VEG
  }
];