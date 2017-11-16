import { EVENT_LIST } from '../constants'
const initialState = {
    eventList: [],
}


export function event (state = initialState, action) {
    switch (action.type) {
        case EVENT_LIST: {
          let eventList = action.payload;
          return Object.assign({}, state, eventList);
        }
        default:
            return state;
    }
}