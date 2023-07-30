import { ContactForm } from "../ContactForm/ContactForm"
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import s from './App.module.css';
import { useSelector } from "react-redux";


export const App = () => {
  const filtered = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <div className={s.conte}>
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList listContact={filterContact()} />
    </div>
    </div>
  );
};
export default App;