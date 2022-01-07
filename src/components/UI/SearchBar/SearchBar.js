import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBar.module.css';
import Input from '../Input/Input';
import { useHistory, useLocation } from 'react-router-dom';
import { searchActions } from '../../../store/store';

const SearchBar = ({ className, placeholder, type }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.search.searchedText);
  const search = useLocation().search;
  useEffect(() => {
    const urlSearchParam = new URLSearchParams(search).get('search');
    if (urlSearchParam)
      dispatch(searchActions.set(urlSearchParam.toLocaleLowerCase()));
  }, [search, dispatch]);
  const handleChange = (event) => {
    dispatch(searchActions.set(event.target.value.toLowerCase()));
    history.push(`/filmy/?search=${event.target.value}`);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/filmy/?search=${searchText}`);
  };
  return (
    <form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
      <Input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={searchText}
      ></Input>
    </form>
  );
};

export default SearchBar;
