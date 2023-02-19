import React from 'react';
import { LabelFilter, InputFilter } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = filter => {
     dispatch(setFilter(filter.target.value))
  };

  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        onChange={handleFilterChange}
      ></InputFilter>
    </LabelFilter>
  );
}
