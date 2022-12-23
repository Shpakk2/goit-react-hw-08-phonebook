import React from "react"
import { nanoid } from 'nanoid';

import css from 'components/App.module.css'

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const contactsArray = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]

    

export class App extends React.Component {

  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parsedTodo = JSON.parse(localStorage.getItem("contacts")) ?? contactsArray;
    this.setState({contacts: parsedTodo})
   }

  componentDidUpdate(preProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  onAddBtnClick = ({name, number}) => {
    const includesName = this.state.contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (includesName) {
      alert(`${name} is already in contacts`)
    } else {
      let contact = { id: nanoid(), name: name, number: number };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  onFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const query = this.state.filter.toLocaleLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(query)
    );

  };

  onDeleteBtnClick = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onAddBtnClick={this.onAddBtnClick} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onFilterChange}/>
        <ContactList contacts={this.filterContacts()} onDeleteBtnClick={this.onDeleteBtnClick}/>
      </div>
  )
}
   
};
