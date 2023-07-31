import PropTypes from 'prop-types';
import { ContList, ContItem, ContButton } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContList>
      {contacts.map(contact => (
        <ContItem key={contact.id}>
          {contact.name}: {contact.number}
          <ContButton onClick={() => onDeleteContact(contact.id)}>
            Delete
          </ContButton>
        </ContItem>
      ))}
    </ContList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
