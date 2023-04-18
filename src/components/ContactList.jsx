import { ContactPreview } from "./ContactPreview";

export function ContactList({ contacts, onSelectContactId, onRemoveContact}) {
    return (
        <section className="clean-list">
            {contacts.map(contact =>
               <li key={contact._id}>
               <ContactPreview  contact={contact} onRemoveContact={onRemoveContact}/>
               </li>
            )}
        </section>
    )
}
