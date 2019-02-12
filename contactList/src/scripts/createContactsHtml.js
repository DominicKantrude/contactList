const buildContactDomHtml = (contact) => {
    let html = `
    <section>
        <p>Name: ${contact.name}</p>
        <p>Address: ${contact.address}</p>
        <p>Phone Number:${contact.phoneNumber}</p>
        <p>Email: ${contact.email}</p>
    </section>
    <button id="deleteButton--${contact.id}">Button</button>
    <button id="editButton--${contact.id}">Edit</button>
    `
return html
}

export default buildContactDomHtml