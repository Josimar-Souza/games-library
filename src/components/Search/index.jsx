import React, { useState, useContext, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import {
  SearchContainer,
  SearchIcon,
} from './searchStyles';
import Button from '../Button';
import Input from '../Input';
import { gamesContext } from '../../context/gamesContext';

function Search() {
  const { searchGameByName, setHasSearched } = useContext(gamesContext);
  const [name, setName] = useState('');

  useEffect(() => {
    searchGameByName(name);
  }, [name]);

  const onInputChange = ({ target: { value } }) => {
    setName(value);
  };

  const onSearchClicked = () => {
    searchGameByName(name);
    setHasSearched(true);
  };

  return (
    <SearchContainer>
      {!isMobile ? <SearchIcon /> : null}
      <Input
        placeholder="Digite um termo para buscar"
        width="80%"
        background="none"
        border="1px solid black"
        borderWidth="0 0 1px 0"
        onChange={onInputChange}
        mobileWidth="65%"
      />
      <Button
        background="none"
        border="1px solid black"
        borderWidth="0 0 1px 0"
        fontSize="14px"
        onClick={onSearchClicked}
        mobileMargin="0 20px 0 0"
      >
        Buscar
      </Button>
    </SearchContainer>
  );
}

export default Search;
