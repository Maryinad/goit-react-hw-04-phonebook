import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormField,
  TitleName,
  TitleNumber,
  InputName,
  InputNumber,
  Btn,
} from './PhoneBook.styled';

export function PhoneBook({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value.trim());
        break;

      case 'number':
        setNumber(value.trim());
        break;

      default:
        break;
    }
    // const { name, value } = event.target; //делаем деструкторизацию
    // if (name === 'name') {
    //   setName(value);
    // } else {
    //   setNumber(value);
    // }
    // this.setState({ [name]: value.trim() }); //обчисливаемые св-ва объекта, после нажатия на input, определяет name какой и подставляет, н-р name="price", то будет price: (то, что ввели, те наше value)
  };

  const handleSubmit = event => {
    event.preventDefault();

    onAddContact({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <FormField onSubmit={handleSubmit}>
        <TitleName htmlFor="">Name</TitleName>
        <InputName
          type="text"
          name="name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          id
          required
        />
        <TitleNumber htmlFor="">Number</TitleNumber>
        <InputNumber
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Btn type="submit">Add contact</Btn>
      </FormField>
    </>
  );
}

PhoneBook.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
