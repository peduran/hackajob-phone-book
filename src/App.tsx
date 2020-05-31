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
  return (
    <div className="App">
      {state.loading ? <div>loading...</div> : <ContactsTable contacts={state.contacts} />}
    </div>
  );
}

export default App;
