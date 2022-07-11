import PropTypes from 'prop-types';
import { Item, Text, DeleteBtn } from './ContactItem.styled';

const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <DeleteBtn type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
