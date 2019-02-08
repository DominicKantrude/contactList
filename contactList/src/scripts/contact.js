let contact = {
    name: name,
    address: address,
    phoneNumber: phoneNumber,
    email: email,
    createContact(name, address, phoneNumber, email) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        return contact
    }
}

export default contact