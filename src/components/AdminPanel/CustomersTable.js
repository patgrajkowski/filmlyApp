import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchCustomers } from '../../helpers/fetchData';
import { sortArray } from '../../helpers/sortArray';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import styles from './AdminPanel.module.css';

const CustomersTable = () => {
  const [customers, setCustomers] = useState([]);
  const populateCustomers = async () => {
    const customersInfo = await fetchCustomers('/api/customers/');
    setCustomers(customersInfo);
  };
  const queryParams = new URLSearchParams(window.location.search);
  const sortParam = queryParams.get('sort');
  const [sort, setSort] = useState(sortParam);
  const history = useHistory();
  const handleSelect = (event) => {
    setSort(event.target.value);
    history.push(`?sort=${event.target.value}`);
  };
  const sortedCustomers = sortArray(customers, sort);
  useEffect(() => {
    populateCustomers();
  }, []);
  return (
    <>
      <select onChange={handleSelect} value={sort}>
        <option value={'_id'}>ID</option>
        <option value={'created'}>Created</option>
        <option value={'firstName'}>FirstName</option>
        <option value={'lastName'}>LastName</option>
        <option value={'address'}>Address</option>
        <option value={'phone'}>Phone</option>
      </select>
      <Card className={styles.card}>
        <h2>Customers</h2>
        <Card className={styles.table}>
          <div className={styles.customersTable__properties}>
            <h3>ID</h3>
            <h3>Created</h3>
            <h3>FirstName</h3>
            <h3>LastName</h3>
            <h3>Address</h3>
            <h3>Phone</h3>
          </div>
          <div className={styles.table__values}>
            {sortedCustomers.map(
              ({ _id, created, firstName, lastName, address, phone }) => (
                <div className={styles.customersTable__singleValue} key={_id}>
                  <p>{_id}</p>
                  <p>{created}</p>
                  <p>{firstName}</p>
                  <p>{lastName}</p>
                  <p>{address}</p>
                  <p>{phone}</p>
                </div>
              )
            )}
          </div>
        </Card>
      </Card>
      <Button secondary={true}>Dodaj</Button>
    </>
  );
};

export default CustomersTable;
