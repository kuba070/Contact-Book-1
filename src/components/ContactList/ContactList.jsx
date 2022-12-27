import React, { useEffect, useContext } from "react";
import { contactsContext } from "../../ContactsContextProvider";
import ContactCard from "../ContactCard/ContactCard";

const ContactList = () => {
  const { getContacts, contacts } = useContext(contactsContext);
  useEffect(() => {
    getContacts();
  }, []);

  console.log(contacts);
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1>CONTACT BOOK</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {contacts.map((item) => (
          <ContactCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
