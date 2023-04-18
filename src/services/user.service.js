import { storageService } from "./async-storage.service"
import {makeId} from './util.service'

export const userService = {
    getUser,
    signup,
    getLoggedinUser,
    transferCoins,
    saveLocalUser,
    logout,
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
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)) || {
        name: 'Shahar',
        balance: 100,
        moves: [],
    }
}

function logout(){
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function getUser() {
    return {
        name: 'Shahar Saadon',
        coins: 100,
        moves: [],
    }
}

function _createMove(amount,contact) {
    return {
        toId: contact._id,
        to: contact.name,
        createdAt: Date.now(),
        amount,
    }
}

function transferCoins(amount,contact) {
    const loggedInUser = getLoggedinUser();
    const newMove = _createMove(amount,contact);
    loggedInUser.moves.unshift(newMove)
    loggedInUser.balance -= amount
    return saveLocalUser(loggedInUser);
}
