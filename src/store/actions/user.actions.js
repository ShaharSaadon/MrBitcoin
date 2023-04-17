export function transferCoins(amount) {
    console.log('amount:', amount)
    return async (dispatch, getState) => {
        try {
            dispatch({ type: 'SPEND_BALANCE', amount})
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function addMove(contact,amount) {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: 'ADD_MOVE', contact,amount})
        } catch (error) {
            console.log('error:', error)
        }
    }
}