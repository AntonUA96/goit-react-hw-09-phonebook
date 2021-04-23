import styles from './ContactForm.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import contactOperation from '../../redux/contacts/contacts-operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (name === '' || number === '') return;

    dispatch(contactOperation.fetchAddContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.decor}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          onChange={e => setName(e.target.value)}
          value={name}
          required
        />
      </label>

      <label className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
      </label>

      <input type="submit" value="Add contact" className={styles.buttonSubmit} />
    </form>
  );
};

export default ContactForm;
