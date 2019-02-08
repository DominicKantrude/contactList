import buildContactDomHtml from "./createContactsHtml"
let contacts = []

const API = {
     getContacts()  {
        return fetch("http://localhost:8088/contacts")
            .then(res => res.json())
    },

    postContact(newContact) {
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContact)
        }).then(res => res.json())
    }
}

const renderContactCollection =() =>{
    API.getContacts().then(parsedContacts => {
        let contactsHtml = parsedContacts.map(contact => {
            return buildContactDomHtml(contact)
        }).join("");
    document.querySelector("#results").innerHTML = contactsHtml;
    })
}

export {API, renderContactCollection}