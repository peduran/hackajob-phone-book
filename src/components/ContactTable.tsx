import React, { useState, useEffect } from "react"
import { Contact } from "../model/Contact"

interface ContactRowProps extends Omit<ContactsTableProps, 'contacts'> {
  contact: Contact
}

const ContactRow = ({ contact, deleteContactHandler, updateContactHandler }: ContactRowProps) => {
  const handleDelete = () => deleteContactHandler(contact.id)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [newContact, setNewContact] = useState<Contact>(contact)

  const saveEdit = () => {
    setIsEditing(false)
    updateContactHandler(contact.id, newContact)
  }
  const handleFieldChange = (field: string, value: string) => setNewContact({ ...newContact, [field]: value })

  const EditRow = <tr>
    <td>
      <input
        value={newContact.name}
        onChange={({ target: { value: v } }) => handleFieldChange('name', v)} />
    </td>
    <td>
      <input
        value={newContact.address}
        onChange={({ target: { value: v } }) => handleFieldChange('addres', v)} />
    </td>
    <td>
      <input
        value={newContact.phoneNumber}
        onChange={({ target: { value: v } }) => handleFieldChange('phoneNumber', v)} />
    </td>
    <td onClick={handleDelete}>delete</td>
    <td onClick={saveEdit}>save</td>
  </tr>

  const DisplayRow = <tr>
    <td>{contact.name}</td>
    <td>{contact.address}</td>
    <td>{contact.phoneNumber}</td>
    <td onClick={handleDelete}>delete</td>
    <td onClick={() => setIsEditing(true)}>edit</td>
  </tr>

  return isEditing ? EditRow : DisplayRow
}

interface ContactsTableProps {
  contacts: Contact[]
  deleteContactHandler: (id: number) => void
  updateContactHandler: (id: number, newContact: Contact) => void
}
const ContactsTable = ({ contacts, deleteContactHandler, updateContactHandler }: ContactsTableProps) =>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Number</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {contacts.map((c, i) => <ContactRow contact={c} key={i} deleteContactHandler={deleteContactHandler} updateContactHandler={updateContactHandler} />)}
    </tbody>
  </table>

export default ContactsTable
