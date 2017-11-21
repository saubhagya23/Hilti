import { EVENT_LIST, EVENT_LOGIN_LIST } from '../constants'
const initialState = {
    eventList: [],
    eventListLoginInfo:{}
}


export function event (state = initialState, action) {
    switch (action.type) {
        case EVENT_LIST: {
          let eventList = action.payload;
          return Object.assign({}, state, eventList);
        }
        case EVENT_LOGIN_LIST: {
            let eventLoginList = action.payload;
            return Object.assign({}, state, eventLoginList);
        }
        default:
            return state;
    }
}