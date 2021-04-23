import styles from './Login.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/user/operations';


const Login = () => {
  const dispatch = useDispatch();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(login({ email, password }));
  };

  return (
    <>
      <h1 className={styles.heading}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.decor}>
        <label className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            required
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>

        <input type="submit" value="Login" className={styles.buttonSubmit} />
      </form>
    </>
  );
};

export default Login;
