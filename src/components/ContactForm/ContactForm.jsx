import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, FormLabel, FormInput, FormBtn } from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    setName(''); 
    setNumber(''); 
  };
  

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">Name:</FormLabel>
      <FormInput
        type="text"
        id="name"
        name="name"
        placeholder="Enter name"
        required
        value={name}
        onChange={handleNameChange}
      />

      <FormLabel htmlFor="number">Number:</FormLabel>
      <FormInput
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
        id="number"
        name="number"
        placeholder="Enter number 000-00-00"
        required
        value={number}
        onChange={handleNumberChange}
      />

      <FormBtn type="submit">Add Contact</FormBtn>
    </Form>
  );
};

export default ContactForm;
