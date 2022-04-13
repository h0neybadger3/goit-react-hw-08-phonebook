import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { phonebookOperations, phonebookSelectors } from 'redux/phonebook';
import ContactItem from './ContactItem';

const ContactList = () => {
  const phonebook = useSelector(phonebookSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(phonebookOperations.getContacts()), [dispatch]);

  return (
    <ul>
      {phonebook.map(contact => (
        <ContactItem
          name={contact.name}
          number={contact.number}
          key={contact.id}
          id={contact.id}
          deleteContact={() =>
            dispatch(phonebookOperations.deleteContact(contact.id))
          }
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
