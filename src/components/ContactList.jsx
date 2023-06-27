import { useEffect } from "react";
import { useState } from "react";
import ContactRow from "./ContactRow";
import SelectedContact from "./SelectedContact";

export default function ContactList({ setSelectedContactId }) {
  
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <div className="contact-list-container">
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {contacts.map((contact) => {
            return (
              <ContactRow
                key={contact.id}
                setSelectedContactId={setSelectedContactId} // Pass the prop here
                contact={contact}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
