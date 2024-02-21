import FilterList from "components/layout/search/filter";

const mockOptionsList = [
    {
      title: 'Inventory',
      path: '/store'
    },
    {
      title: 'Add Items',
      path: '/store/add'
    },
    {
      title: 'Delete Items',
      path: '/store/delete'
    },
  ];
  

const ManagerOptions = () => {

    return <FilterList list={mockOptionsList} title="Store Tasks" />;
}

export default ManagerOptions