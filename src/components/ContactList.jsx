import { ContactPreview } from "./ContactPreview";

export function ContactList({ contacts, onSelectContactId, onRemoveContact}) {
    return (
        <section className="clean-list cards-container">
            {contacts.map(contact =>
               <li key={contact._id}>
               <ContactPreview  contact={contact} onRemoveContact={onRemoveContact}/>
               </li>
            )}
        </section>
    )
}
