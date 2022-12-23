import { nanoid } from 'nanoid';

import {useState, useEffect } from "react"

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

export const App = () => {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    const parsedTodo = JSON.parse(localStorage.getItem("contacts")) ?? contactsArray;
    setContacts(parsedTodo)
  }, []);  
  
  useEffect(() => {
      localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts]);    
  
  const onAddBtnClick = ({name, number}) => {
    const includesName = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (includesName) {
      alert(`${name} is already in contacts`)
    } else {
      let contact = { id: nanoid(), name: name, number: number };
      setContacts(prevContacts => [...prevContacts, contact]);
    }
  };

  const  onFilterChange = e => {
    setFilter(e.target.value);
  };

  const  filterContacts = () => {
    const query = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(query)
    );

  };

  const onDeleteBtnClick = (id) => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id),
    );
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddBtnClick={onAddBtnClick} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={onFilterChange}/>
      <ContactList contacts={filterContacts()} onDeleteBtnClick={onDeleteBtnClick}/>
    </div>
)

}    

// export class App extends React.Component {

//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const parsedTodo = JSON.parse(localStorage.getItem("contacts")) ?? contactsArray;
//     this.setState({contacts: parsedTodo})
//    }

//   componentDidUpdate(preProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
//     }
//   }

//   onAddBtnClick = ({name, number}) => {
//     const includesName = this.state.contacts.find(
//       contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
//     );

//     if (includesName) {
//       alert(`${name} is already in contacts`)
//     } else {
//       let contact = { id: nanoid(), name: name, number: number };
//       this.setState(prevState => ({
//         contacts: [...prevState.contacts, contact],
//       }));
//     }
//   };

//   onFilterChange = e => {
//     this.setState({ filter: e.target.value });
//   };

//   filterContacts = () => {
//     const query = this.state.filter.toLocaleLowerCase();

//     return this.state.contacts.filter(contact =>
//       contact.name.toLocaleLowerCase().includes(query)
//     );

//   };

//   onDeleteBtnClick = (id) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };
  

//   render() {
//     return (
//       <div className={css.container}>
//         <h1>Phonebook</h1>
//         <ContactForm onAddBtnClick={this.onAddBtnClick} />

//         <h2>Contacts</h2>
//         <Filter value={this.state.filter} onChange={this.onFilterChange}/>
//         <ContactList contacts={this.filterContacts()} onDeleteBtnClick={this.onDeleteBtnClick}/>
//       </div>
//   )
// }
   
// };

