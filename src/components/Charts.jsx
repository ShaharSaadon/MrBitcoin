import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots, SparklinesNormalBand } from 'react-sparklines';

export function Charts({ tradeVolume }) {

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
