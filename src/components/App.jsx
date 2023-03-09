import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  getStateValues = (data) => {
    this.setState(({ contacts }) => {
      return {
        contacts: [data, ...contacts]
      };
    });
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("saved_contacts"));
    if(contacts){
    this.setState(({ contacts }));}
  };

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts){
      localStorage.setItem("saved_contacts", JSON.stringify(contacts));
    };
  };
 
  deleteItem = num => {
    return this.setState(prevState => ({ contacts: prevState.contacts.filter(({ id }) => id !== num) }));
  };

  getFilter = (text) => {
    this.setState({ filter: text });
  };
  
  render() {
    const { getStateValues, getFilter, deleteItem, state: { contacts, filter } } = this;
    const filteredContacts = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
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
              getFilter={getFilter}
            />
          </div>
          <ContactList
            filteredContacts={filteredContacts}
            deleteItem={deleteItem} />
        </div>
      </div>
    );
  };
};
