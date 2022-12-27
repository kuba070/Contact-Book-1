import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { contactsContext } from "../../ContactsContextProvider";

const AddContact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const { addContact } = useContext(contactsContext);

  const handleValues = () => {
    const newContact = {
      name,
      lastName,
      phone,
    };

    if (!name.trim() || !lastName.trim() || !phone.trim()) {
      alert("zapolnite polya");
      return;
    }
    addContact(newContact);
  };

  return (
    <div className="container d-flex flex-column mt-5 align-items-center">
      <h1>ADD CONTACT</h1>
      <Form.Control
        onChange={(e) => setName(e.target.value)}
        className="mb-2 w-50"
        placeholder="name"
        value={name}
      />
      <Form.Control
        onChange={(e) => setLastName(e.target.value)}
        className="mb-2 w-50"
        placeholder="lastName"
        value={lastName}
      />
      <Form.Control
        onChange={(e) => setPhone(e.target.value)}
        className="mb-2 w-50"
        placeholder="phone"
        value={phone}
      />
      <Button onClick={handleValues} className="w-50" variant="dark">
        Add
      </Button>
    </div>
  );
};

export default AddContact;
