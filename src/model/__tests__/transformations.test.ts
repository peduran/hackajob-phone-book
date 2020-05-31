import { ContactsResponse } from "../../api"
import { Contact } from "../Contact"
import { toContacts } from "../transformations"

const contactsResponse: ContactsResponse = {
  contacts: [
    {
      name: "Oleta Level",
      phone_number: "+442032960159",
      address: "10 London Wall, London EC2M 6SA, UK",
    },
    {
      name: "Maida Harju",
      phone_number: "+442032960899",
      address: "Woodside House, 94 Tockholes Rd, Darwen BB3 1LL, UK",
    },
  ],
}

const contacts: Contact[] = [
  {
    id: 0,
    name: "Oleta Level",
    phoneNumber: "+442032960159",
    address: "10 London Wall, London EC2M 6SA, UK",
  },
  {
    id: 1,
    name: "Maida Harju",
    phoneNumber: "+442032960899",
    address: "Woodside House, 94 Tockholes Rd, Darwen BB3 1LL, UK",
  },
]

const noDataResponse: ContactsResponse = { contacts: [] }
const noData: Contact[] = []

describe("test conversion of response type to our type", () => {
  test("conversion works with data", () =>
    expect(toContacts(contactsResponse)).toEqual(contacts))
  test("conversion returns empty array with no data", () =>
    expect(toContacts(noDataResponse)).toEqual(noData))
})
