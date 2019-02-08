// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import
// the ContactCollection component.
import contact from "./contact"
import { API, renderContactCollection } from "./contactCollection";
import buildContactDomHtml from "./createContactsHtml"

const getContactInfoFromDom = () => {
    let name = document.querySelector("#name").value
    let address = document.querySelector("#address").value
    let phoneNumber = document.querySelector("#phoneNumber").value
    let email = document.querySelector("#email").value

    let newContact = contact.createContact(name, address, phoneNumber, email)
    API.postContact(newContact).then(contact => {
        document.querySelector("#results").innerHTML += buildContactDomHtml(contact)
    })
}
export default getContactInfoFromDom