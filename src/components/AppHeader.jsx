import { Link, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactSVG } from 'react-svg';
import { svgs } from '../services/svg.service'


function _AppHeader(props) {
    console.log('props:', props)

    function onBack() {
        props.history.goBack()
    }


    const { name, balance } = props.user
    return (
        <section className='full'>
            <header className="main-header">
                <div className="info flex justify-between items-center">
                    <div className="logo">MrBitCoin</div>
                    <nav>
                        <ReactSVG src={svgs.search} />
                        <NavLink exact to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/charts" className="nav-link"> Stats </NavLink>
                        <NavLink to="/contacts" className="nav-link"> Contacts </NavLink>
                        <NavLink to="/user" className="nav-link"> user </NavLink>

                    </nav>
                    <div className="details flex-column">
                        {/* <h4>Username: {name} </h4>
                        <h4>Coins:{balance} </h4>
                        <NavLink exact to="/signup" className="signup"> Signup </NavLink> */}

                        {name && balance ? (
                            <>
                                <div className="user-details flex">
                                    <div className="box flex flex-column items-center">
                                        <h4>Welcome, {name}!</h4>
                                        <h4>You got {balance} coins</h4>
                                    </div>
                                    <button className="btn-logout" >logout</button>
                                </div>
                            </>
                        ) : (
                            <NavLink exact to="/signup" className="signup">
                                Signup
                            </NavLink>
                        )}
                    </div>
                    {/* <section className="back">
                            <button onClick={onBack} class="btn-back">Back</button>
                        </section> */}
                </div>
            </header>
        </section>
    )
}

const mapStateToProps = (state) => ({
    user: state.userModule.loggedInUser
})

export const AppHeader = connect(mapStateToProps)(withRouter(_AppHeader))


