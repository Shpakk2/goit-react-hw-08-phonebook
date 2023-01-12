import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "redux/operations";
import css from "pages/Register/Register.module.css"

const Register = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
      e.preventDefault();
    dispatch(signup({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

    return (
      <div className={css.container}>
        <h1>Registration</h1>
            <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Tyler Durden"
              required
              className={css.input}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="td@gmail.com"
              required
              className={css.input}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            minLength="7"
              required
              className={css.input}
          />
        </label>

        <button className={css.btn} type="submit">Register</button>
      </form>
        </div>
    )
    
}

export default Register