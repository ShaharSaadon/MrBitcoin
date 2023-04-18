import { Component } from 'react'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
import bannerBox from '../assets/images/bannerBox.png'
import bannerClock from '../assets/images/bannerClock.png'
import bannerWallet from '../assets/images/bannerWallet.png'
import bannerMap from '../assets/images/bannerMap.png'
import bannerRocket from '../assets/images/bannerRocket.png'
import bannerHuman from '../assets/images/bannerHuman.png'
import iconUsd from '../assets/images/usd.png'



export class HomePage extends Component {
    state = {
        user: null,
        bitcoinRate: null,
        filterBy: {
            txt: '',
        },
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
                <div className="main-content">
                    <div className="content">
                        <div className="send-container">
                            <div className="header flex justify-between">
                                <div className="amount">
                                    <p>You send</p>
                                    <h1>1000</h1>
                                </div>
                                <div className="select">
                                    <div className="money flex">
                                        <img src={iconUsd} alt="My Image" className="icon-usd" />
                                        <p>USD</p>
                                        <div className="arrow">  _</div>
                                    </div>
                                </div>
                            </div>
                            <div className="main">
                                <div className="money-transfer" >
                                    <div className="icon">AA</div>
                                    <p>Show calculation</p>
                                    <span></span>
                                    <div className="icon"><span>-</span></div><p> 10 <span>USD</span></p> <p>Our fee</p>
                                    <div className="icon"><span>=</span></div><p> 1000 <span>USD</span></p> <p>We'll Convert</p>
                                </div>

                                <div className="receiver flex justify-between">

                                    <div className="box">
                                        <p>Recipient gets</p>
                                        <h1>1000</h1>
                                    </div>
                                    <div className="money flex">
                                        <img src={iconUsd} alt="My Image" className="icon-usd" />
                                        <p>USD</p>
                                        <div className="arrow">  _</div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer flex">
                                <button className="btn-started">Get Started</button>
                            </div>
                        </div>

                        <h2 className="heading">Buy Bitcoin, Ethereum, USDC and others <span> securely </span>& <span>easily</span>.</h2>
                        <h4 className="subheading">No signup required. All it takes is 2 minutes.</h4>
                        <div className="ticker"><p>Quickly and easily send, receive and request money online with Paylio. Get a customised solution to fit your business needs.</p></div>
                        <div className="bitcoin">
                            <h3 className="bitcoin-box">1 Bitcoin =  {(1 / bitcoinRate).toLocaleString()}$ </h3>
                        </div>
                    </div>
                    <div className="banners-area full">
                        <img src={bannerHuman} alt="My Image" className="banner-human" />
                        <img src={bannerBox} alt="My Image" className="banner-box" />
                        <img src={bannerClock} alt="My Image" className="banner-clock" />
                        <img src={bannerWallet} alt="My Image" className="banner-wallet" />
                        <img src={bannerMap} alt="My Image" className="banner-map" />
                        <img src={bannerRocket} alt="My Image" className="banner-rocket" />

                    </div>

                </div>


            </section>
        )
    }
}
