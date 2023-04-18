import { Component } from 'react'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'

export class HomePage extends Component {
    state = {
        user: null,
        bitcoinRate: null,
        filterBy: {
            txt: '',
        },
        isShow: true,
    }

    async componentDidMount() {
        try {
            const user = userService.getUser()
            const bitcoinRate = await bitcoinService.getRate()
            this.setState({ bitcoinRate, user })
        } catch (err) {
            console.log('err:', err)

        }

    }
    handleClick = () => {
        let { isShow } = this.state
        this.setState({ isShow: !isShow })
        console.log('isShow:', isShow)
    }

    render() {
        const { user, bitcoinRate, isShow, tradeVolume } = this.state
        if (!user) return <div>...</div>
        return (
            <section className='full'>
                {isShow ? <div className="main-content">
                    <div className="content">
                        <img className="smile" src="https://www.mrcoin.eu/assets/images/illustrations/hero-717b4c3ff0ad69070f6498bb5ecdd979.svg" alt="" />
                        <h2 className="heading">Buy Bitcoin, Ethereum, USDC and others <span> securely </span>& <span>easily</span>.</h2>
                        <h4 className="subheading">No signup required. All it takes is 2 minutes.</h4>
                        <div className="ticker"><button>Ask</button> <button onClick={this.handleClick}>Send</button></div>
                        <div className="bitcoin">
                            <h3 className="bitcoin-box">1 Bitcoin =  {(1 / bitcoinRate).toLocaleString()}$ </h3>
                        </div>
                    </div>
                </div> : ''}
                {/* <Charts tradeVolume={tradeVolume}/> */}


            </section>
        )
    }
}
