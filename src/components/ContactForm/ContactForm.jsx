import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from "redux/operations";
import css from 'components/ContactForm/ContactForm.module.css'


export const ContactForm = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const contacts = useSelector(state => state.contacts.items)
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const includesName = contacts.find(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase())

        if (includesName) {
             alert(`${name} is already in contacts`)
        } else {
            dispatch(addContact({name, number}))
            e.target.reset()
        }

    }
  
    const onInputChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case "name":
                setName(value)
                break;
            case "number":
                setNumber(value)
                break;
            default:
                return;
         }
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label >Insert Name
                    <input
                    onChange={onInputChange}
                    value={name}
                    type="text"
                    className={css.input}
                    name={"name"}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
            </label>
            <label>Insert Number
                    <input className={css.input}
                    onChange={onInputChange}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
            </label>
            <button className={css.btn} type="submit">Add contact</button>
        </form>
        )
}


// export class ContactForm extends React.Component {

//     state = {
//     name: '',
//     number: '',
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onAddBtnClick(this.state)
//         e.target.reset()
//     };

//     onInputChange = e => {
//         const { name, value } = e.currentTarget;
//         this.setState({ [name]: value });
//     };

//     render() {
//         return (
//         <form className={css.form} onSubmit={this.handleSubmit}>
//             <label >Insert Name
//                     <input
//                     onChange={this.onInputChange}
//                     value={this.state.name}
//                     type="text"
//                     className={css.input}
//                     name={"name"}
//                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                     required
//                     />
//             </label>
//             <label>Insert Number
//                     <input className={css.input}
//                     onChange={this.onInputChange}
//                     value={this.state.number}
//                     type="tel"
//                     name="number"
//                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                     required
//                     />
//             </label>
//             <button className={css.btn} type="submit">Add contact</button>
//         </form>
//         )
//     }
// }