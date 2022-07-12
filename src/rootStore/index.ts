import { type } from "os";
import { combineReducers } from "redux";

interface CountModel {
    count: number;
}

export const ADD_COUNT = "ADD_COUNT";
export const DEL_COUNT = "DEL_COUNT";

interface AddCount {
    type: typeof ADD_COUNT,
    payload: number
}
interface DelCount {
    type: typeof DEL_COUNT,
    payload: number
}

export type countActions = AddCount | DelCount;

const initialState: CountModel = {
    count: 0
}

const countReducer = (state: CountModel = initialState, action: countActions) =>{
    switch(action.type) {
        case ADD_COUNT:
            return {
                count:state.count + action.payload
            }
        case DEL_COUNT:
            return {
                count:state.count - action.payload
            }
        default: return state;
    }
}

const rootReducer = combineReducers({
    count: countReducer
})

export default rootReducer;