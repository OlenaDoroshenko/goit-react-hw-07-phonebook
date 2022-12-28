import ContactListItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

const ContactList = ({ contacts }) => {
  const filter = useSelector(getFilter);
  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact}></ContactListItem>
      ))}
    </ul>
  );
};

export default ContactList;
