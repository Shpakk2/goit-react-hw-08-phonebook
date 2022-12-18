import React from "react"
import PropTypes from 'prop-types';
import css from 'components/ContactForm/ContactForm.module.css'


export class ContactForm extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        const {name, number} = e.currentTarget.elements
        this.props.onAddBtnClick(name.value, number.value)
        e.target.reset()
    };

    render() {
        return (
        <form className={css.form} onSubmit={this.handleSubmit}>
            <label >Name
                <input
                    type="text"
                    className={css.input}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
            </label>
            <label>Number
                <input className={css.input}
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
}

ContactForm.propTypes = {
  onAddBtnClick: PropTypes.func.isRequired,
};