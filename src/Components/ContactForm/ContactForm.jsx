import { useState } from "react";
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/sliceContact";
import Notiflix, { Notify } from 'notiflix';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === "name" ? setName(value) : setNumber(value);
  };
  const reset = () => {
    setName("");
    setNumber("");
  };
  const contacts = useSelector((state) => state.contacts);
  return (
    <form
    className={s.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (
          contacts.some(
            (value) => value.name.toLowerCase() === name.toLocaleLowerCase()
          )
        ) {
          Notify.info(`${name} is already in contacts`);
        } else {
          dispatch(add({ name, number }));
        }
        reset();
      }}
    >
      <div className={s.container}>
        <label className={s.label}>
          <span>Name</span>
        </label>
        <input
            className={s.input}
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z]*)?[a-zA-Z]*)*$"
          required
        />

        <label>
          <span>Number</span>
        </label>
        <input
        className={s.input}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z]*)?[a-zA-Z]*)*$"
          required
        />
        <button className={s.btn} type="submit">Add contact</button>
      </div>
    </form>
  );
};
