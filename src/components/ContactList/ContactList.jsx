import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ContList, ContItem, ContButton } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <ContList>
       {filteredContacts.map(contact => (
        <ContItem key={contact.id}>
          {contact.name}: {contact.number}
          <ContButton onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </ContButton>
        </ContItem>
      ))}
    </ContList>
  );
};

export default ContactList;
