import PropTypes from 'prop-types';
import Button from 'components/base/Button.styled';
import ContactItem from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';

const ContactListItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  // const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <ContactItem>
      {contact.name}: {contact.phone}
      <Button type="button" onClick={() => deleteContact(contact.id)}>
        {isLoading ? 'Deleting...' : 'Delete'}
      </Button>
    </ContactItem>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
