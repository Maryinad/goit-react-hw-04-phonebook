import React, { useEffect, useState } from 'react';
import { PhoneBook } from './PhoneBook/PhoneBook.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { Filter } from '../components/Filter/Filter.jsx';
import { TitlePhone, TitleCont } from './App.styled';
import { nanoid } from 'nanoid';

export function App() {
  const getLocalData = () => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  };

  const [contacts, setContacts] = useState(getLocalData);
  const [filterTerm, setFilterTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // componentDidMount() {
  //   const contacts = localStorage.getItem(LOCAL_CONTACTS);
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({
  //       contacts: parsedContacts,
  //     });
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     const stringifiedContacts = JSON.stringify(this.state.contacts);
  //     localStorage.setItem(LOCAL_CONTACTS, stringifiedContacts);
  //   }
  // }

  const addContact = newContact => {
    if (contacts.some(contact => contact.name === newContact.name)) {
      alert(`Contact ${newContact.name} is already exist`);
      return;
    }
    const contact = {
      ...newContact,
      id: nanoid(),
    };

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const handleFilter = event => {
    setFilterTerm(event.target.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filterTerm.toLowerCase())
  );
  //передаем пропсами
  return (
    <>
      <TitlePhone>Phonebook</TitlePhone>
      <PhoneBook onAddContact={addContact} title="Phonebook" />
      <TitleCont>Contacts</TitleCont>
      <Filter value={filterTerm} onFilterChange={handleFilter} />
      <ContactList contacts={filteredContacts} onDeleteBtn={deleteContact} />
    </>
  );
}
