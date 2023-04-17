import { Link, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function _AppHeader(props) {
    console.log('props:', props)
    
    function onBack() {
        props.history.goBack()
    }

    const {name,balance} = props.loggedInUser
    return (
        <section className='full'>
            <header className="main-header">
                <div className="info flex justify-between items-center">
                    <div className="logo">MrCoin</div>
                    <nav>
                        <NavLink to="/contacts" > Contacts </NavLink> |
                        <NavLink to="/charts"> Charts </NavLink> |
                        <NavLink exact to="/" > Home </NavLink>

                    </nav>
                    <div className="details flex-column">
                        <h4>Username: {name} </h4>
                        <h4>Coins:{balance} </h4>
                        <NavLink exact to="/signup" > Signup </NavLink>
                        <section className="back">
                            <button onClick={onBack} >Back</button>
                        </section>
                    </div>
                </div>
            </header>
        </section>
    )
}

const mapStateToProps = (state) => ({
    loggedInUser: state.userModule.loggedInUser
})

export const AppHeader = connect(mapStateToProps)(withRouter(_AppHeader))


