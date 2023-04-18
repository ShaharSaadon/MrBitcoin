import axios from 'axios';

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getTradeVolume,
}

async function getRate() {
    let rate = null
    try {
        rate = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
    } catch (err) {
        console.log('err:', err)
    }
    console.log('rate:', rate)
    return rate.data
}

async function getMarketPrice() {
    let marketPrice = null
    try {
        marketPrice = await axios.get('https://api.blockchain.info/charts/market-price?format=json&cors=true')
    } catch (err) {
        console.log('err:', err)
    }
    console.log('rate:', marketPrice)
    return marketPrice.data
}

async function getTradeVolume() {
    let tradeVolume = null
    console.log('hello:')
    try {
        tradeVolume = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
        console.log('tradeVolume2:', tradeVolume)
    } catch (err) {
        console.log('err:', err)
    }
    return tradeVolume.data.values
}
