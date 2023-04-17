import { ContactPreview } from "./ContactPreview";

export function ContactList({ contacts, onSelectContactId, onRemoveContact}) {
    return (
        <section className="clean-list cards-container">
            {contacts.map(contact =>
               <li>
               <ContactPreview key={contact._id} contact={contact} onRemoveContact={onRemoveContact}/>
               </li>
            )}
        </section>
    )
}
