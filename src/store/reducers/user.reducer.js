import { userService } from "../../services/user.service";



const INITIAL_STATE = {
    loggedInUser: userService.getLoggedinUser() || {
        name: 'Jorji',
        balance: 100
    }
}

export function userReducer(state = INITIAL_STATE, action = {}) {
    let { loggedInUser } = state
    let updatedLoggedInUser 
    switch (action.type) {
        case 'SPEND_BALANCE':
            updatedLoggedInUser = { ...loggedInUser, balance: loggedInUser.balance - action.amount }
            userService.saveLocalUser(updatedLoggedInUser) // save the updated user to sessionStorage
            return {
                ...state,
                loggedInUser: updatedLoggedInUser
            }

        case 'ADD_MOVE':
            const move = userService.addMove(action.contact,action.amount)
            console.log('move:', move)
            updatedLoggedInUser = { ...loggedInUser, moves: [...loggedInUser.moves,move] }
            userService.saveLocalUser(updatedLoggedInUser) // save the updated user to sessionStorage
            return {
                ...state,
                loggedInUser: updatedLoggedInUser
            }

        default:
            return state;
    }
}