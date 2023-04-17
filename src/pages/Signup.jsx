import { Component } from 'react'
import { userService } from '../services/user.service'

export class Signup extends Component {

    state = {
        newUser: {
            name: '',
            password: '',
            email: '',
        }
    }
    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    handleChange = ({ target }) => {
        const field = target.name
        let value = target.value

        this.setState(({ newUser }) => ({ newUser: { ...newUser, [field]: value } }));


    }

    onSignup = async (ev) => {
        ev.preventDefault()
        try {
            await userService.signup({...this.state.newUser })
            this.props.history.push('/contacts')
        } catch (error) {
            console.log('error:', error)
        }
    }

    render() {
        const { newUser } = this.state
        return (

            <section className='signup-container'>
                <form onSubmit={this.onSignup} >

                    <h2>please enter your name</h2>
                    <label htmlFor="name">name</label>
                    <input value={newUser.name} onChange={this.handleChange} type="text" name="name" id="name" />
                    <label htmlFor="name">password</label>
                    <input value={newUser.password} onChange={this.handleChange} type="password" name="password" id="password" />
                    <label htmlFor="name">email</label>
                    <input value={newUser.email} onChange={this.handleChange} type="text" name="email" id="email" />
                    <button>Signup</button>
                </form>
            </section>
        )
    }
}