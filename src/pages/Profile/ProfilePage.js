// import { ContactForm } from '../components/ContactForm/ContactForm';
// import { ContactList } from '../components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { selectIsLoading } from '../../redux/selectors';
// import { Filter } from '../components/Filter/Filter';
// import { ContactsWrapper } from './ProfilePage.styled';
// import { Loader } from '../components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts()); // Виконуємо запит для отримання контактів з сервера
  }, [dispatch]);

  return <div>{/* <p>Profile Settings</p> */}</div>;
}
