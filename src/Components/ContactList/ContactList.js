import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import contactsOperations from 'redux/contacts/contacts-operations';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const handleRemoveContact = id => dispatch(contactsOperations.deleteContact(id));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [contactsOperations.fetchContacts()])

  return (
    <ul className={s.listItems}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          &#128578; {name}: {number}
          <button onClick={() => handleRemoveContact(id)} className={s.btn}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
