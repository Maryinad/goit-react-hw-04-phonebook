import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  FormField,
  TitleName,
  TitleNumber,
  InputName,
  InputNumber,
  Btn,
} from './PhoneBook.styled';

export class PhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    // console.log(event.target.name);
    // console.log(event.target.value);

    const { name, value } = event.target; //делаем деструкторизацию
    this.setState({ [name]: value.trim() }); //обчисливаемые св-ва объекта, после нажатия на input, определяет name какой и подставляет, н-р name="price", то будет price: (то, что ввели, те наше value)
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    //при submit в пропсах в форме наша ф-ция addContact, пропс onAddContact
    // console.log(this.props);

    //при сабмите формы функцию достаем с пропсов
    this.props.onAddContact(contact);

    this.reset();
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    // const { name, number } = this.state;
    return (
      <>
        <FormField onSubmit={this.handleSubmit}>
          <TitleName htmlFor="">Name</TitleName>
          <InputName
            type="text"
            name="name"
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            id
            required
          />
          <TitleNumber htmlFor="">Number</TitleNumber>
          <InputNumber
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Btn type="submit">Add contact</Btn>
        </FormField>
      </>
    );
  }
}

PhoneBook.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
