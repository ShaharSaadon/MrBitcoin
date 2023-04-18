import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
import MovesList from '../components/MovesList'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class _UserDetails extends Component {

  state = {
    bitcoinRate: null,
  }
  async componentDidMount() {
    //add routing guards
    document.title = 'User Details';
    const bitcoinRate = await bitcoinService.getRate()
    this.setState({ bitcoinRate })
  }

  get lastThreeMoves() {
    const { user } = this.props
    return user.moves.slice(0,3)
  }

  render() {
    const { user } = this.props
    const { bitcoinRate } = this.state
    if (!user || !bitcoinRate) {
      return <div>Loading...</div>
    }
    return (
      <><section className='user-details'>
        <section className="user text-center">
          <h1>Hello {user.name}! </h1>
          <div className='flex space-around user-balance'>
          <h2>Your Current Balance: {user.balance}$ </h2>
          <h3>BTC Rate: {bitcoinRate}</h3>
          </div>
        </section>
        <hr></hr>
        <MovesList title={'Your Last 3 Moves:'} moves={this.lastThreeMoves}/>
        </section>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.userModule.loggedInUser
})

export const UserDetails = connect(mapStateToProps)(withRouter(_UserDetails))
