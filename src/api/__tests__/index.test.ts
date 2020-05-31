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

const postDeleteContacts: Contact[] = [
  {
    id: 1,
    name: "Maida Harju",
    phoneNumber: "+442032960899",
    address: "Woodside House, 94 Tockholes Rd, Darwen BB3 1LL, UK",
  },
]

describe("tests the mocked methods of the api", () => {
  test("deletion of a contact", async () => {
    expect.assertions(1)
    const deletedContacts = await PhonebookApi.deleteContactLocal(0, contacts)
    expect(deletedContacts).toEqual(
      postDeleteContacts
    )
  })
})
