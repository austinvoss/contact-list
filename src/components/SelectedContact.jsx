import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";

export default function SelectedContact({ selectedContactId }) {
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setSelectedContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSelectedContact();
  }, [selectedContactId]);

  if (!selectedContact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {selectedContact.name}</p>
      <p>Email: {selectedContact.email}</p>
      <p>Phone: {selectedContact.phone}</p>
      <p>Username: {selectedContact.username}</p>
      <p>Website: {selectedContact.website}</p>
      <p>Company Name: {selectedContact.company.name}</p>
      <p>Company Catch Phrase: {selectedContact.company.catchPhrase}</p>
      <p>Company BS: {selectedContact.company.bs}</p>
      <p>Address: {selectedContact.address.street}</p>
      <button onClick={() => window.location.reload()}>Back</button>
    </div>
  );
}
