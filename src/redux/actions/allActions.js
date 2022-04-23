import { actionTypes } from "../constants/actionTypes"

export const SET_USER = (user) => {
    return {
        type: actionTypes.SET_USER,
        payload: user,
    }
}

export const SET_USERS = (users) => {
    return {
        type: actionTypes.SET_USERS,
        payload: users,
    }
}

export const SET_TWEETS = (tweets) => {
    return {
        type: actionTypes.SET_TWEETS,
        payload: tweets,
    }
}

export const SET_USER_PROFILE = (userProfile) => {
    return {
        type: actionTypes.SET_USER_PROFILE,
        payload: userProfile,
    }
}
