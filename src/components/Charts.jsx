import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots, SparklinesNormalBand } from 'react-sparklines';
import { bitcoinService } from '../services/bitcoin.service'
import { Component } from 'react';

export class Charts extends Component {
    state = {
        tradeVolume: null,
    }

    componentDidMount() {
        this.loadTradeVolume()
        document.title = 'Stats';

    }

    loadTradeVolume = async () => {
        try {
            let tradeVolume = await bitcoinService.getTradeVolume()
            tradeVolume = tradeVolume.map(data => data.y)
            this.setState({ tradeVolume })
        } catch (err) {
            console.log('err:', err)
        }
    }
    render() {
        const {tradeVolume} = this.state
        if(!tradeVolume) return
        return (
            <section className="charts-container">
                <Sparklines data={tradeVolume}>
                    <SparklinesLine color="blue" />
                    <SparklinesReferenceLine type="mean" />
                    <SparklinesSpots size={2} style={{ fill: "blue" }} />
                    <SparklinesNormalBand style={{ fill: "rgba(0, 0, 255, 0.1)" }} />
                </Sparklines>

                <div style={{ textAlign: "center" }}>Time</div>
                <div style={{ position: "absolute", left: "-65px", top: "100px", transform: "rotate(-90deg)" }}>Trade Volume</div>
            </section>
        )
    }
}
