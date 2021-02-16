import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/contacts-actions';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.filterWrapper}>
      <label htmlFor="contact-filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="contact-filter"
        placeholder="Enter name for search"
        className={s.inputFilter}
        onChange={({ target }) =>
          dispatch(changeFilter(target.value))
        }
        value={value}
      />
    </div>
  );
}
