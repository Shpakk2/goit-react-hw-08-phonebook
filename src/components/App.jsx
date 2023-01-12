import css from 'components/App.module.css'

import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/operations';
import { Header } from './Header/Header';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));



export const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<PublicRoute> <Home /> </PublicRoute>} />
          <Route path="register" element={<PublicRoute restricted><Register /></PublicRoute>} />
        <Route path="login" element={<PublicRoute restricted> <Login /> </PublicRoute>} />
        <Route path="contacts" element={<PrivateRoute> <Contacts /> </PrivateRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
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

