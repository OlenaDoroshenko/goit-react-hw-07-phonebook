import GlobalStyle from './GlobalStyle';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { Toaster } from 'react-hot-toast';

const Phonebook = () => {
  const { data: contacts, isError, isLoading } = useGetContactsQuery();
  return (
    <>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <Form />

      {isError && <p>Things went south.. =( Please try again.</p>}
      {isLoading ? (
        <p>Contacts are loading...</p>
      ) : (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList contacts={contacts} />
        </>
      )}
      <Toaster />
    </>
  );
};

export default Phonebook;
