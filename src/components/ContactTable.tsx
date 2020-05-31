import React from "react"
import { Contact } from "../model/Contact"

interface ContactProps {
  contact: Contact
}

const ContactRow = ({ contact }: ContactProps) => (
  <tr>
    <td>{contact.name}</td>
    <td>{contact.address}</td>
    <td>{contact.phoneNumber}</td>
  </tr>
)

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
      </tr>
    </thead>
    <tbody>
      {contacts.map((c, i) => <ContactRow contact={c} key={i} />)}
    </tbody>
  </table>

export default ContactsTable
