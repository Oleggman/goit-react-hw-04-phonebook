import React, { Component } from 'react'
import Notiflix from 'notiflix'
import { nanoid } from 'nanoid'
import { RiContactsBook2Fill } from 'react-icons/ri';
import { ContactsForm } from './ContactsForm/ContactsForm'
import { ContactsBook } from './ContactsBook/ContactsBook'
import { Filter } from './Filter/Filter'
import { MainContainer, AppTitle, ContactsList, ContactsTitle } from './App.styled';

const LS_KEY = "contacts";

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem(LS_KEY);
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  onAddContacts = (values, helpers) => {
    if (this.state.contacts.some(contact => contact.name === values.name)) {
      Notiflix.Notify.failure('This person already exists');
      helpers.resetForm();
      return;
    }

    const contact = {
      id: nanoid(),
      name: values.name,
      number: values.number
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }));

    helpers.resetForm();
  }

  onInputFilter = (e) => {
    this.setState({ filter: e.target.value });
  }

  onDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  getContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    })
  }

  render() {
    const { filter } = this.state;
    
    return (
      <div>
        <AppTitle><RiContactsBook2Fill />Phonebook</AppTitle>

        <MainContainer>
          <ContactsForm onSubmitForm={this.onAddContacts} />

          <ContactsList>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter filter={filter} onInputFilter={this.onInputFilter} />
            <ContactsBook
              contacts={this.getContacts()}
              onDeleteContact={this.onDeleteContact}
            />
          </ContactsList>
        </MainContainer>
      </div>
    )
  }
}
