import initialContacts from "./contacts.json";
import ContactList from "./components/ContactList/ContactList.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container/Container.jsx";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedCont = localStorage.getItem("contacts");
    return savedCont === null ? initialContacts : JSON.parse(savedCont);
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContacts = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const searchedContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <Container>
        <h1>Phonebook</h1>

        <ContactForm onAdd={addContact} />
        <SearchBox value={search} onSearch={setSearch} />
        <ContactList contacts={searchedContacts} onDelete={deleteContacts} />
      </Container>
    </section>
  );
}

export default App;
