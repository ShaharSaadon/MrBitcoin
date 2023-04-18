import { Component } from 'react'
import { contactService } from '../services/contact.service'
import { TransferFund } from '../components/TransferFund'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { transferCoins, addMove } from '../store/actions/user.actions'
import MovesList from '../components/MovesList'


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

    onTransferCoins = (amount, contact) => {
        if (!amount) return
        this.props.transferCoins(amount, contact)
    }

    get filterMoves() {
        const { contact } = this.state
        const { user } = this.props
        console.log('user:', user)
        return user.moves.filter((move) => move.toId === contact._id).splice(0, 5)
    }


    render() {
        const { contact } = this.state
        const { balance } = this.props.user
        if (!contact) return <div>Loading...</div>
        return (
            <section className='contact-details'>

                <button onClick={this.onBack} class="btn-back">Back</button>

                <img src={`https://robohash.org/${contact._id}`} />
                <section>
                    <h1>name: {contact.name}</h1>
                </section>
                <section>
                    <p>phone: {contact.phone}</p>
                </section>
                <section>
                    <p>email: {contact.email}</p>
                </section>
                <TransferFund contact={contact} maxCoins={balance} onTransferCoins={this.onTransferCoins} />
                <MovesList title={'Your Moves:'} moves={this.filterMoves} />

            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userModule.loggedInUser
})

const mapDispatchToProps = {
    transferCoins,
}

export const ContactDetails = connect(mapStateToProps, mapDispatchToProps)(withRouter(_ContactDetails))

