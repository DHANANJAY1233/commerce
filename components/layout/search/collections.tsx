import { collections } from 'lib/constants';
import FilterList from './filter';

async function CollectionList() {
  const collectionList = collections.map(collection => ({
    title: collection.title,
    path: `/search/${collection.collectionCode}`
  }))
  const all = {title: 'All', path: '/search'}
  return <FilterList list={[all,...collectionList]} title="Collections" />;
}

export default function Collections() {
  return <CollectionList />;
}
