const buildContactDomHtml = (contact) => {
    let html = `
    <section>
        <p>Name: ${contact.name}</p>
        <p>Address: ${contact.address}</p>
        <p>Phone Number:${contact.phoneNumber}</p>
        <p>Email: ${contact.email}</p>
    </section>
    `
    console.log(html)
    return html
}

export default buildContactDomHtml