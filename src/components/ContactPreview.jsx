import React from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onRemoveContact }) {

    return (
        <article className='contact-preview'>
                    <img src={`https://robohash.org/${contact._id}`} />
                <Link to={`/contact/${contact._id}`} className="info">
                    <div className="box">
                    <h3>{contact.name}</h3>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    </div>
                </Link>
                <div className="actions">
                <Link to={`/contact/edit/${contact._id}`} className="edit">Edit</Link>
                <Link to={`/contact/${contact._id}`} className="details">Details</Link>
                <button onClick={() => onRemoveContact(contact._id)} className="btn-delete">Delete</button>
            </div>
        </article>
    )
}
