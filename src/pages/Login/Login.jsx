import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/operations';
import css from "pages/Login/Login.module.css"

const Login = () => {
    const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.container}>
      <h1>Login</h1>

      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="td@gmail.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
        </label>

        <label>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            minLength="7"
            required
          />
        </label>

        <button  className={css.btn} type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

