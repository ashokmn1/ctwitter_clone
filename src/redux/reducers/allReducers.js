import { actionTypes } from "../constants/actionTypes"

const initialState = {
    user: [],
}


export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_USER:
            return { ...state, user: payload }
        default:
            return state
    }
}

export const usersReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_USERS:
            return { ...state, ...payload }
        default:
            return state
    }
}

export const tweetsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_TWEETS:
            return { ...state, ...payload }
        default:
            return state
    }
}

export const userProfileReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_USER_PROFILE:
            return {...payload }
        default:
            return state
    }
}