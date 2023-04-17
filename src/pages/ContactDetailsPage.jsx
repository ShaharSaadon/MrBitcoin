import { Component } from 'react'
import { contactService } from '../services/contact.service'
import { TransferFund } from '../components/TransferFund'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { transferCoins,addMove } from '../store/actions/user.actions'


class _ContactDetails extends Component {
    state = {
        contact: null,
    }

    componentDidMount() {
        this.loadContact()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }

    loadContact = async () => {
        try {
            const contact = await contactService.getContactById(this.props.match.params.id)
            this.setState({ contact })
        } catch (error) {
            console.log('error:', error)
        }
    }

    onBack = () => {
        this.props.history.push('/contacts')
    }

    onTransferCoins = (amount) => {
        const { contact } = this.state
        this.props.transferCoins(amount)
        this.props.addMove(contact,amount)
    }

    render() {
        const { contact } = this.state
        const { balance } = this.props.loggedInUser
        if (!contact) return <div>Loading...</div>
        return (
            <section className='contact-details'>
                <img src={`https://robohash.org/${contact._id}`} />
                <section>
                    <h3>name: {contact.name}</h3>
                </section>
                <section>
                    <h3>phone: {contact.phone}</h3>
                </section>
                <section>
                    <h3>email: {contact.email}</h3>
                </section>
                <TransferFund contact={contact} maxCoins={balance} onTransferCoins={this.onTransferCoins} />
                <button onClick={this.onBack}>Back</button>

            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedInUser: state.userModule.loggedInUser
})

const mapDispatchToProps = {
    transferCoins,
    addMove,
}

export const ContactDetails = connect(mapStateToProps,mapDispatchToProps)(withRouter(_ContactDetails))

