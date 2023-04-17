import { Component } from 'react'
import { userService } from '../services/user.service'

export class TransferFund extends Component {

    state = {
        amount: 0,
    }
    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    handleChange = ({ target }) => {
        const amount = target.value
        if (amount >= this.props.maxCoins) this.setState({ amount: this.props.maxCoins })
        else if (amount < 0) this.setState({ amount: 0 })
        else this.setState({ amount })
    }

    render() {
        const { contact, onTransferCoins } = this.props
        const { amount } = this.state
        return (

            <section className='transfer-box'>
                <form onSubmit={() => onTransferCoins(amount)}>
                    <p>Transfer Coins to {contact.name}</p>
                    <label htmlFor="amount">amount</label>
                    <input value={amount} onChange={this.handleChange} type="number" name="amount" id="amount" />
                    <button>transfer</button>
                </form>
            </section>
        )
    }
}