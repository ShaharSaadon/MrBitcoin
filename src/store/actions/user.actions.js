import { userService } from "../../services/user.service"

export function transferCoins(amount, contact) {
    return async (dispatch, getState) => {
        try {
            const updatedUser = userService.transferCoins(amount, contact)
            dispatch({ type: 'SET_USER', user: updatedUser })
        } catch (error) {
            console.log('error:', error)
        }
    }
}
