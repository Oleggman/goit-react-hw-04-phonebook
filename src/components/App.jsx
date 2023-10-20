import { useState, useEffect } from 'react'
import Notiflix from 'notiflix'
import { nanoid } from 'nanoid'
import { RiContactsBook2Fill } from 'react-icons/ri';
import { ContactsForm } from './ContactsForm/ContactsForm'
import { ContactsBook } from './ContactsBook/ContactsBook'
import { Filter } from './Filter/Filter'
import { MainContainer, AppTitle, ContactsList, ContactsTitle } from './App.styled';

const LS_KEY = "contacts";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem(LS_KEY)) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts])

  const onAddContacts = (values, helpers) => {
    if (contacts.some(contact => contact.name === values.name)) {
      Notiflix.Notify.failure('This person already exists');
      helpers.resetForm();
      return;
    }

    const { name, number } = values;
    setContacts(prevContacts => [...prevContacts, { id: nanoid(), name, number}]);

    helpers.resetForm();
  }

  const onDeleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  }

  const getContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    })
  }

  return (
    <div>
        <AppTitle><RiContactsBook2Fill />Phonebook</AppTitle>

        <MainContainer>
          <ContactsForm onSubmitForm={onAddContacts} />

          <ContactsList>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter filter={filter} onInputFilter={(evt) => setFilter(evt.target.value)} />
            <ContactsBook
              contacts={getContacts()}
              onDeleteContact={onDeleteContact}
            />
          </ContactsList>
        </MainContainer>
      </div>
  )
}
