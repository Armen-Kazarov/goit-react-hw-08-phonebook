import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import TextField from '@material-ui/core/TextField';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name.length === 0) {
      alert('Some filed is empty');
      return false;
    }

    const isExistContact = contacts.find(contact => contact.name === name);
    if (isExistContact) {
      alert(`${name} is already in contacts.`);
      resetForm();
      return;
    }

    const numberValidator = /^\(?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
    if( !numberValidator.test(number)) {
      alert('Please enter the number according to the template');
      resetForm();
      return;
    }

    return dispatch(contactsOperations.addContact(name, number), resetForm());
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <h2 className={s.title}>Phonebook</h2>
      <form className={s.contactForm} onSubmit={handleSubmit}>
        <h2 className={s.inputTitle}>Name</h2>
        <TextField  label="Enter name"
                    variant="filled"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange} />
        <h2 className={s.inputTitle}>Name</h2>
        <TextField  label="Enter phone number"
                    type="tel"
                    name="phone"
                    variant="filled"
                    value={number}
                    onChange={handleChange}
        />
        <span className={s.inputPhonePrompt}>
          Format phone number 000-00-00
        </span>
        <button className={s.btnAdd} type="submit">
          Add contact
        </button>
      </form>
      <h2 className={s.title}>Contacts</h2>
    </div>
  );
}
