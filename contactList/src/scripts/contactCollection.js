import buildContactDomHtml from "./createContactsHtml"
let contacts = []

const API = {

    getSingleContact(contactId) {
        return fetch(`http://localhost:8088/contacts/${contactId}`)
            .then(res => res.json())
    },

    getContacts() {
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
    },
    editContacts(editedContact, contactId) {
        return fetch(`http://localhost:8088/contacts/${contactId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedContact)
        }).then(res => res.json()).then(parsedThing=>{
            renderContactCollection()
        })
    },

    removeContacts(contactId) {
        console.log(contactId)
        return fetch(`http://127.0.0.1:8088/contacts/${contactId}`, {
            method: "DELETE"
        }).then(renderContactCollection())
    }
}

const renderContactCollection = () => {

    API.getContacts().then(parsedContacts => {
        let contactsHtml = parsedContacts.map(contact => {
            return buildContactDomHtml(contact)
        }).join("");
        document.querySelector("#results").innerHTML = contactsHtml;
        document.querySelector("#results").addEventListener("click", function (event) {
            let splitIdArray = event.target.id.split("--")
            if ("deleteButton" === splitIdArray[0]) {
                API.removeContacts(splitIdArray[1])
            } else if ("editButton" === splitIdArray[0]) {

                document.querySelector("#editContact").value = splitIdArray[1]

                API.getSingleContact(splitIdArray[1]).then(contact => {
                    document.querySelector("#name").value = contact.name
                    document.querySelector("#address").value = contact.address
                    document.querySelector("#phoneNumber").value = contact.phoneNumber
                    document.querySelector("#email").value = contact.email
                    document.querySelector("#submit").textContent = "Edit"
                })
            }
        })
    })
}

export { API, renderContactCollection }