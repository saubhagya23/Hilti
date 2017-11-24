import { EVENT_LIST, EVENT_LOGIN_LIST } from '../constants'
import {ARRIVAL_LIST} from "../constants/index";
const initialState = {
    eventList: [],
    eventListLoginInfo:{},
    arrivalList:[]
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
        case ARRIVAL_LIST:{
            let arrivalList = action.payload;
            return Object.assign({}, state, {arrivalList});
        }
        default:
            return state;
    }
}