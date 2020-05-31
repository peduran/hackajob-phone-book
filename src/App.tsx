import React, { useEffect, useState } from 'react';
import './App.css';
import { Contact } from './model/Contact';
import PhoneBookApi from './api';
import ContactsTable from './components/ContactTable';


interface State {
  loading: boolean
  contacts: Contact[]
}

function App() {
  const [state, updateState] = useState<State>({ loading: true, contacts: [] })

  const loadContacts = async () => {
    try {
      const contacts = await PhoneBookApi.getContacts()
      updateState({ loading: false, contacts })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    loadContacts()
  }, [])

  const deleteContactHandler = (contacts: Contact[]) => (id: number) =>
    updateState({ ...state, contacts: PhoneBookApi.deleteContact(id, contacts) })

  const updateContactHandler = (contacts: Contact[]) => (id: number, newContact: Contact) =>
    updateState({ ...state, contacts: PhoneBookApi.updateContact(id, contacts, newContact) })

  return (
    <div className="App">
      {state.loading ?
        <div>loading...</div> :
        <ContactsTable
          contacts={state.contacts}
          deleteContactHandler={deleteContactHandler(state.contacts)}
          updateContactHandler={updateContactHandler(state.contacts)} />
      }
    </div>
  );
}

export default App;
