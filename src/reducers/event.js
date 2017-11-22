import { EVENT_LIST, EVENT_LOGIN_LIST } from '../constants'
const initialState = {
    eventList: [],
    eventListLoginInfo:{}
}


export function event (state = initialState, action) {
    switch (action.type) {
        case EVENT_LIST: {
            console.log('action.payload-get-',action.payload);
          let eventList = action.payload;
          return Object.assign({}, state, eventList);
        }
        case EVENT_LOGIN_LIST: {
            console.log('action.payload--',action.payload);
            let eventLoginList = action.payload;
            return Object.assign({}, state, eventLoginList);
        }
        default:
            return state;
    }
}