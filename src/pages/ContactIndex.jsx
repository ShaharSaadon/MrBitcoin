import { Component } from 'react'
import {contactService} from '../services/contact.service'
import {ContactList} from '../components/ContactList.jsx'
import {ContactFilter} from '../components/ContactFilter'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { loadContacts,removeContact,setFilterBy } from '../store/actions/contact.actions'

class _ContactIndex extends Component {

    componentDidMount() {
        console.log('this.props:', this.props)
        this.props.loadContacts()
    }

    onRemoveContact = async (contactId) => {
        try {
            const res = await this.props.removeContact(contactId)
            console.log('res:', res)
        } catch (error) {
            console.log('error:', error)
        }
    }

    onChangeFilter = (filterBy) => {
        console.log('filterBy:', filterBy)
        this.props.setFilterBy(filterBy)
        this.props.loadContacts()

    }


    
    render() {
        const { contacts,filterBy } = this.props
        if (!contacts) return <div>Loading...</div>
        return (
            <section className='contacts-container'>
                <ContactFilter filterBy={filterBy} onChangeFilter={this.onChangeFilter}/>
                <Link to="/contact/edit">Add contact</Link>
                <ContactList contacts={contacts} onRemoveContact={this.onRemoveContact}/>

            </section>
        )
    }
}

const mapStateToProps = state =>({
contacts: state.contactModule.contacts,
filterBy: state.contactModule.filterBy  
})

const mapDispatchToProps = {
loadContacts,
removeContact,
setFilterBy,
} 

export const ContactIndex = connect(mapStateToProps,mapDispatchToProps)(_ContactIndex) 