import PropTypes from 'prop-types';
import css from 'components/ContactList/ContactList.module.css'

export const ContactList = ({ contacts, onDeleteBtnClick }) => {
    return (
        <ul>
            {contacts.map(contact => {
        return (
            <li key={contact.id} className={css.item}> <p>{contact.name}: {contact.number}</p> <button className={css.btn} onClick={() => onDeleteBtnClick(contact.id)}>Delete</button> </li>
        )
      })}
        </ul>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired
};