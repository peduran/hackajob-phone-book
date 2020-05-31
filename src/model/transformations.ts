import { Contact } from "./Contact"
import { ContactResponse, ContactsResponse } from "../api"

const toContact = (
  { name, address, phone_number: phoneNumber }: ContactResponse,
  id: number
): Contact => ({ id, address, name, phoneNumber })

export const toContacts = (cs: ContactsResponse): Contact[] =>
  cs.contacts.map((c, i) => toContact(c, i))
