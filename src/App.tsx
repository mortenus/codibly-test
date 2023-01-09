import React from 'react';

import styles from './App.module.scss';

import { useSearchParams } from 'react-router-dom';

import store from './redux/store';
import { connect } from 'react-redux';
import { setCount, fetchItems, filterItems, setFilteredItems } from './redux/slices/items';

import { ItemsTable, Pagination, CustomInput } from './Components';
import { TItems } from './types';

const App = ({ users, count, page, filteredUsers, itemsLoading }: any) => {
  const [search, setSearch] = useSearchParams();

  React.useEffect(() => {
    store.dispatch(fetchItems());
  }, []);

  // FIltering Users
  React.useEffect(() => {
    if (users) {
      store.dispatch(filterItems());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, users]);

  // checking function on URL change
  React.useEffect(() => {
    handleUrlQuery();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // handleres
  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setSearch({ page: value.toString() });
  };

  const handleUrlQuery = () => {
    const page = search.get('page');
    if (page) {
      return store.dispatch(setCount(page));
    }

    const searchVal = search.get('search');
    if (searchVal) {
      const result: TItems = users.find((obj: any) => obj.id === +searchVal);

      const newArr = [];
      newArr.push(result);

      store.dispatch(setFilteredItems(newArr));
    } else {
      store.dispatch(filterItems());
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <CustomInput setSearch={setSearch} />
        <ItemsTable filteredUsers={filteredUsers} isLoading={itemsLoading} />

        <Pagination page={page} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default connect(({ items }) => ({
  users: items.users,
  filteredUsers: items.filteredUsers,
  count: items.count,
  page: items.page,
  itemsLoading: items.loading,
}))(App);
