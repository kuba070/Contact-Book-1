import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { contactsContext } from "../../ContactsContextProvider";

const Edit = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const { oneContactInfo, getOneContactInfo, updateContactInfo } =
    useContext(contactsContext);
  const { id } = useParams();

  useEffect(() => {
    getOneContactInfo(id);
  }, []);

  useEffect(() => {
    if (oneContactInfo) {
      setName(oneContactInfo.name);
      setLastName(oneContactInfo.lastName);
      setPhone(oneContactInfo.phone);
    }
  }, [oneContactInfo]);

  const handleValues = () => {
    const editedContact = {
      name,
      lastName,
      phone,
    };

    if (!name.trim() || !lastName.trim() || !phone.trim()) {
      alert("zapolnite polya");
      return;
    }
    updateContactInfo(id, editedContact);
  };

  return (
    <div className="container d-flex flex-column mt-5 align-items-center">
      <h1>Edit</h1>
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
      <Button
        onClick={() => {
          handleValues();
          navigate("/");
        }}
        className="w-50"
        variant="dark"
      >
        Save
      </Button>
    </div>
  );
};

export default Edit;
