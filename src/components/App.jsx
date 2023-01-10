import css from 'components/App.module.css'
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
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

