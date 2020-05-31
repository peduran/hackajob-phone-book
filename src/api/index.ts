import axios from "axios"
import { Contact } from "../model/Contact"
import { toContacts } from "../model/transformations"

export interface PhonebookAPI {
  getContacts: () => Promise<Contact[]>
}

export interface ContactsResponse {
  contacts: ContactResponse[]
}

export interface ContactResponse {
  name: string
  address: string
  phone_number: string
}

const PHONEBOOK_ENDPOINT = "http://www.mocky.io/v2/581335f71000004204abaf83"
const client = axios.create({
  baseURL: PHONEBOOK_ENDPOINT,
  timeout: 1000,
})

const getContacts = async () => {
  const response = await client.get<ContactsResponse>("/")
  return toContacts(response.data)
}

const PhonebookApi: PhonebookAPI = { getContacts }
export default PhonebookApi
