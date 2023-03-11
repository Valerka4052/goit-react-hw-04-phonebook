import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { useEffect, useState } from "react";

export function App () {

  const [contacts, setContacts] = useState(() => {
   const contacts = JSON.parse(localStorage.getItem("saved_contacts"));
    if (contacts) {
      return contacts;
    } return [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts === []) { return };
    localStorage.setItem("saved_contacts", JSON.stringify(contacts));
    }, [contacts]);

 const getStateValues = (data) => {
   setContacts([data, ...contacts]);
  };

 const deleteItem = num => {
    setContacts(contacts.filter(({ id }) => id !== num));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textAlign: 'center',
        color: '#010101'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ><div>
          <h1>Phonebook</h1>
          <ContactForm
            contacts={contacts}
            getStateValues={getStateValues} />
          <h2>Contacts</h2>
          <Filter
            setFilter={setFilter}
          />
        </div>
        <ContactList
          filteredContacts={filteredContacts}
          deleteItem={deleteItem} />
      </div>
    </div>
  );
};
