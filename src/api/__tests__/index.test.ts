import { Contact } from "../../model/Contact"
import PhonebookApi from ".."

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

const postUpdate: Contact[] = [
  {
    id: 0,
    name: "New Name",
    phoneNumber: "+7888888888888",
    address: "New address",
  },
  {
    id: 1,
    name: "Maida Harju",
    phoneNumber: "+442032960899",
    address: "Woodside House, 94 Tockholes Rd, Darwen BB3 1LL, UK",
  },
]

const postDelete: Contact[] = [
  {
    id: 1,
    name: "Maida Harju",
    phoneNumber: "+442032960899",
    address: "Woodside House, 94 Tockholes Rd, Darwen BB3 1LL, UK",
  },
]

describe("tests the mocked methods of the api", () => {
  test("local deletion of a contact", async () => {
    expect.assertions(1)
    const deletedContacts = await PhonebookApi.deleteContact(0, contacts)
    expect(deletedContacts).toEqual(
      postDelete
    )
  })

  test("local update of a contact", async () => {
    expect.assertions(1)
    const newContact: Contact = postUpdate[0]
    const updatedContacts = await PhonebookApi.updateContact(0, contacts, newContact)
    expect(updatedContacts).toEqual(
      postUpdate
    )
  })
})
