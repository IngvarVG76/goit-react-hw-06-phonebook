import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, updateFilter } from 'redux/contactsSlice';

import { Container, Heading, Section, SubHeading } from 'components';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleAddContact = ({ name, number }) => {
    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = event => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <Section>
      <Container>
        <Heading>Phonebook</Heading>
        <ContactForm onAddContact={handleAddContact} />

        <SubHeading>Contacts</SubHeading>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList
          onDeleteContact={handleDeleteContact}
        />
      </Container>
    </Section>
  );
};

export default App;
