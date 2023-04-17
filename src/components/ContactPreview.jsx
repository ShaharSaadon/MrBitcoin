import React from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onRemoveContact }) {

    return (
        <article className='contact-preview'>
            <section className="info">
                <Link to={`/contact/${contact._id}`}>
                    <img src={`https://robohash.org/${contact._id}`} />
                    <h2>{contact.name}</h2>
                    <h4>{contact.phone}</h4>
                    <h4>{contact.email}</h4>
                </Link>

            </section>
            <section className="actions">
                <button onClick={() => onRemoveContact(contact._id)} >X</button>
                <Link to={`/contact/edit/${contact._id}`}>Edit</Link>

            </section>
        </article>
    )
}
