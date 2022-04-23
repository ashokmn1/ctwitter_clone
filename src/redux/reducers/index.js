import { combineReducers } from "redux";
import { tweetsReducer, userProfileReducer, userReducer, usersReducer } from "./allReducers";


const reducers = combineReducers({
    particularuser:userReducer,
    userprofile:userProfileReducer,
    allusers:usersReducer,
    allTweets: tweetsReducer,
})

export default reducers