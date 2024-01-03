import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { filterReducer } from "./filterReducer";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers(
    {
        //state name : reducer that will control it
        todosState: todosReducer,
        filterState: filterReducer,
        //async examples login
        userState: userReducer
        //.. add more state and reduces to include them in the store
    }
)