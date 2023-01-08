import css from 'components/ContactList/ContactList.module.css'
import { removeContact } from 'redux/contactsSlice'
import { useDispatch, useSelector } from 'react-redux'

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts)

    return (
        <ul>
            {contacts.map(contact => {
        return (
            <li key={contact.id} className={css.item}> <p>{contact.name}: {contact.number}</p> <button className={css.btn} onClick={() => dispatch(removeContact(contact))}>Delete</button> </li>
        )
      })}
        </ul>
    )
}
