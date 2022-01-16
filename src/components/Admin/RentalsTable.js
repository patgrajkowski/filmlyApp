// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { fetchRentals } from '../../helpers/fetchData';
// import { sortArray } from '../../helpers/sortArray';
// import Button from '../UI/Button/Button';
// import Card from '../UI/Card/Card';
// import styles from './AdminPanel.module.css';

// const RentalsTable = () => {
//   const [rentals, setRentals] = useState([]);
//   const populateRentals = async () => {
//     const rentalsInfo = await fetchRentals('/api/rentals/');
//     setRentals(rentalsInfo);
//   };
//   const queryParams = new URLSearchParams(window.location.search);
//   const sortParam = queryParams.get('sort');
//   const [sort, setSort] = useState(sortParam);
//   const history = useHistory();
//   const handleSelect = (event) => {
//     setSort(event.target.value);
//     history.push(`?sort=${event.target.value}`);
//   };
//   useEffect(() => {
//     populateRentals();
//   }, []);
//   const sortedRentals = sortArray(rentals, sort);
//   return (
//     <>
//       <select onChange={handleSelect} value={sort}>
//         <option value='_id'>ID</option>
//         <option value='customer._id'>CustomerID</option>
//         <option value='customer.name'>CustomerName</option>
//         <option value='dateOut'>DateOut</option>
//         <option value='dateReturned'>DateReturned</option>
//         <option value='actualDateReturned'>ActualDateReturned</option>
//         <option value='movie._id'>MovieID</option>
//         <option value='movie.title'>MovieTitle</option>
//       </select>
//       <Card className={styles.card}>
//         <h2>Rentals</h2>
//         <Card className={styles.table}>
//           <div className={styles.rentalsTable__properties}>
//             <h3>ID</h3>
//             <h3>CustomerID</h3>
//             <h3>CustomerName</h3>
//             <h3>DateOut</h3>
//             <h3>DateReturned</h3>
//             <h3>ActualDateReturned</h3>
//             <h3>MovieID</h3>
//             <h3>MovieTitle</h3>
//           </div>
//           <div className={styles.table__values}>
//             {sortedRentals.map(
//               ({
//                 _id,
//                 customer,
//                 dateOut,
//                 dateReturned,
//                 actualdateReturned,
//                 movie,
//               }) => (
//                 <div className={styles.rentalsTable__singleValue} key={_id}>
//                   <p>{_id}</p>
//                   <p>{customer._id}</p>
//                   <p>{`${customer.firstName} ${customer.lastName}`}</p>
//                   <p>{dateOut}</p>
//                   <p>{dateReturned}</p>
//                   <p>{actualdateReturned}</p>
//                   <p>{movie._id}</p>
//                   <p>{movie.title}</p>
//                 </div>
//               )
//             )}
//           </div>
//         </Card>
//       </Card>
//       <Button secondary={true}>Dodaj</Button>
//     </>
//   );
// };

// export default RentalsTable;
