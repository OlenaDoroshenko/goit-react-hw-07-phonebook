import Input from 'components/base/Input.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(setFilter(e.currentTarget.value));

  return (
    <>
      <span>Find contacts by name</span>
      <label>
        <Input type="text" name="filter" onChange={handleFilterChange} />
      </label>
    </>
  );
};

export default Filter;
