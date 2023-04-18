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

export function logout() {
    return async (dispatch, getState) => {
        try {
            const updatedUser = userService.logout()
            dispatch({ type: 'SET_USER', user: updatedUser })
        } catch (error) {
            console.log('error:', error)
        }
    }
}
export function login() {
    return async (dispatch, getState) => {
        try {
            const updatedUser = userService.getLoggedinUser()
            dispatch({ type: 'SET_USER', user: updatedUser })
        } catch (error) {
            console.log('error:', error)
        }
    }
}

