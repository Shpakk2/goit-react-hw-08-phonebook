import PropTypes from 'prop-types';

import css from 'components/Filter/Filter.module.css'

export const Filter = ({ value, onChange }) => {
        return (
            <div className={css.wrapper}>
                <label>Find contacts by name</label>
                <input type="text" name="filter" value={value} onChange={onChange}/>
            </div>
    )
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};