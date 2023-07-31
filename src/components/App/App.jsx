import React from 'react';

import { Container, Heading, Section, SubHeading } from 'components';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const App = () => {
  return (
    <Section>
      <Container>
        <Heading>Phonebook</Heading>
        <ContactForm />
        <SubHeading>Contacts</SubHeading>
        <Filter />
        <ContactList />
      </Container>
    </Section>
  );
};

export default App;
