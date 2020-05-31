import React from "react"
import { Contact } from "../model/Contact"

interface ContactProps {
  contact: Contact
  deleteContactHandler: (id: number) => void
}

const ContactRow = ({ contact, deleteContactHandler}: ContactProps) => {
  const handleDelete = () => deleteContactHandler(contact.id)
  return <tr>
    <td>{contact.name}</td>
    <td>{contact.address}</td>
    <td>{contact.phoneNumber}</td>
    <td onClick={handleDelete}>delete</td>
  </tr>
}
const deleteC = (id: number) => console.log(id)

interface ContactsTableProps {
  contacts: Contact[]
}
const ContactsTable = ({ contacts }: ContactsTableProps) =>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Number</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {contacts.map((c, i) => <ContactRow contact={c} key={i} deleteContactHandler={deleteC} />)}
    </tbody>
  </table>

export default ContactsTable
