import React, { useState } from 'react';
import Input from 'components/base/Input.styled';
import Button from 'components/base/Button.styled';
import { useAddContactMutation } from 'redux/contactsSlice';
import toast from 'react-hot-toast';

const Form = () => {
  const [addContact] = useAddContactMutation();

  const [contact, setContact] = useState({
    name: '',
    phone: '',
  });

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await addContact(contact);
      setContact({
        name: '',
        phone: '',
      });
      toast.success('Contact added successfully!');
    } catch (error) {
      toast.error('Oops.. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          value={contact.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Phone number
        <Input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={contact.phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </form>
  );
};

export default Form;
