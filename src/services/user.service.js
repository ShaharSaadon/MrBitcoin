import { storageService } from "./async-storage.service"
import {makeId} from './util.service'

export const userService = {
    getUser,
    signup,
    getLoggedinUser,
}

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'



async function signup(credentials) {
    credentials.balance = 100
    const user = await storageService.post('user', credentials)
    return saveLocalUser(user)
}

function saveLocalUser(user) {
    user = {_id: user._id, name: user.name, balance: user.balance}
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
