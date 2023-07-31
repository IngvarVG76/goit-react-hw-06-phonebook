import { useSelector, useDispatch } from 'react-redux';

import { updateFilter } from 'redux/contactsSlice';
import { FilterSection, FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <FilterSection>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        placeholder="Search"
        value={filter} 
        onChange={handleFilterChange} 
      />
    </FilterSection>
  );
};

export default Filter;
