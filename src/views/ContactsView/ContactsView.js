import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from 'Components/ContactList/ContactList';
import ContactForm from 'Components/ContactForm/ContactForm';
import Filter from 'Components/Filter/Filter';
import Loader from 'Components/Loader/Loader';
import { authSelectors, authOperations } from '../../redux/auth';

export default function ContactsView(params) {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(authSelectors.getLoading);

  useEffect(() => dispatch(authOperations.fetchCurrentUser()), [dispatch]);

  return (
    <>
      <div style={s.barStyles}>
        <ContactForm />
        <ContactList />
        <Filter />

        {isLoadingContacts && <Loader/>}
      </div>
    </>
  );
}