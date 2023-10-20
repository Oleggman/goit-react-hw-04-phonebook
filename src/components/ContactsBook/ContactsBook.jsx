import { Contact } from "components/Contact/Contact";
import { ContactsUL } from "./ContactsBook.styled";

export const ContactsBook = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ContactsUL>
        {contacts.map(contact =>
          <Contact
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />)}
      </ContactsUL>
    </div>
  );
}