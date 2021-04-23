import styles from './Registration.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registration } from '../../redux/user/operations';

const Registration = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(registration({ name: login, email, password }));
  };

  return (
    <>
      <h1 className={styles.heading}>Registration</h1>
      <form onSubmit={handleSubmit} className={styles.decor}>
        <label className={styles.label}>
          Login
          <input
            type="text"
            name="name"
            onChange={e => setLogin(e.target.value)}
            value={login}
            required
          />
        </label>

        <label className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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

        <input type="submit" value="Sign Up" className={styles.buttonSubmit} />
      </form>
    </>
  );
};

export default Registration;
