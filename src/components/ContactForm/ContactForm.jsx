import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, FormBtn } from './ContactForm.styled';

const ContactForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleChange = event => {
    setFormData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddContact(formData);
    setFormData({ name: '', number: '' });
  };

  const { name, number } = formData;

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
        onChange={handleChange}
      />

      <FormLabel htmlFor="number">Number:</FormLabel>
      <FormInput
        type="tel"
        id="number"
        name="number"
        placeholder="Enter number"
        required
        value={number}
        onChange={handleChange}
      />

      <FormBtn type="submit">Add Contact</FormBtn>
    </Form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
