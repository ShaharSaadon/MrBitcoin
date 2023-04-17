import { storageService } from "./async-storage.service"
import {makeId} from './util.service'

export const userService = {
    getUser,
    signup,
    getLoggedinUser,
    addMove,
    saveLocalUser,
}

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'



async function signup(credentials) {
    credentials.balance = 100
    credentials.moves=[]
    const user = await storageService.post('user', credentials)
    return saveLocalUser(user)
}

function saveLocalUser(user) {
    console.log('user:', user)
    user = { _id: user._id, name: user.name, balance: user.balance,moves:user.moves}
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function getUser() {
    return {
        name: 'Shahar Saadon',
        coins: 100,
        moves: [],
    }
}

function _getEmptyMove() {
    return {
        toId: makeId(),
        to: '',
        createdAt: Date.now(),
        amount: 0,
    }
}

function addMove(contact, amount) {
    const newMove = _getEmptyMove();
    newMove.to = contact;
    newMove.amount = amount;
    const loggedInUser = getLoggedinUser();
    const updatedUser = {
      ...loggedInUser,
      moves: [...loggedInUser.moves, newMove]
    };
    saveLocalUser(updatedUser);
    return updatedUser;
  
}
