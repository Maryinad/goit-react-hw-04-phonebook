import React from 'react';
import PropTypes from 'prop-types';
import { Title, InputBlock } from './Filter.styled';

export function Filter({ value, onFilterChange }) {
  return (
    <>
      <Title>Find contact by name</Title>
      <InputBlock
        type="text"
        name="filter"
        onChange={onFilterChange}
        value={value}
      />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
