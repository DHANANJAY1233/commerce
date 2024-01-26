import FilterList from './filter';

const mockCollectionList = [
  {
    title: 'All',
    path: '/search'
  },
  {
    title: 'Egg and Dairy Products',
    path: '/search/dairy'
  },
  {
    title: 'Bread and Bakery',
    path: '/search/bread'
  },
  {
    title: 'Fruits and Vegetables',
    path: '/search/vegetable'
  }
];

async function CollectionList() {
  //const collections = await getCollections();
  return <FilterList list={mockCollectionList} title="Collections" />;
}

export default function Collections() {
  return <CollectionList />;
}
