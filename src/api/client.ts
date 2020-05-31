import axios, { AxiosResponse } from "axios";
import { Contact } from "../model/Contact";

interface PhonebookAPI {
  getContacts: () => Promise<AxiosResponse<Contact[]>>;
}

const PHONEBOOK_ENDPOINT = "http://www.mocky.io/v2/581335f71000004204abaf83";
const client = axios.create({
  baseURL: PHONEBOOK_ENDPOINT,
  timeout: 1000,
});

const getContacts = client.get<Contact[]>('')

export default {getContacts}