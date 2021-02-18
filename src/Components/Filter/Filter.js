import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/contacts-actions';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import s from './Filter.module.css';

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #6F7DA2;
      background: rgba(58, 118, 239, .3);
    }

    &.Mui-focused fieldset {
      border-color: #3a76ef;
    }
  }
`;

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.filterWrapper}>
      <h2 className={s.inputFilterTitle}>Find contacts by name</h2>
      <StyledTextField
                 label="Enter name for search"
                 variant="outlined"
                 id="deterministic-outlined-input"
                 type='text'
                 name="filter"
                 value={value}
                 onChange={({ target }) =>
                   dispatch(changeFilter(target.value))
                 }
      />
    </div>
  );
}
