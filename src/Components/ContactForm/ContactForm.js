import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';
import s from './ContactForm.module.css';
import { getContacts } from 'redux/contacts/contacts-selectors';

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
        <label htmlFor="new-name">Name</label>
        <input
          type="text"
          name="name"
          id="new-name"
          placeholder="Enter name"
          className={s.inputName}
          onChange={handleChange}
          value={name}
        />
        <label htmlFor="new-phone">Number</label>
        <input
          type="tel"
          name="phone"
          id="new-phone"
          placeholder="Enter phone number"
          className={s.inputPhone}
          onChange={handleChange}
          value={number}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          required
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
