import { userService } from "../../services/user.service";

const INITIAL_STATE = {
    loggedInUser: userService.getLoggedinUser()
}

export function userReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
            case 'SET_USER': {
                return { ...state, loggedInUser: { ...action.user } }
              }
          

        default:
            return state;
    }
}