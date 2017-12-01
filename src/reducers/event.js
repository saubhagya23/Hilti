import { EVENT_LIST, EVENT_LOGIN_LIST } from '../constants'
import {ARRIVAL_LIST, DEPARTURE_LIST} from "../constants/index";
const initialState = {
    eventList: [],
    eventListLoginInfo:{},
    arrivalList:[],
    departureList:[]
}


export function event (state = initialState, action) {
    switch (action.type) {
        case EVENT_LIST: {
            console.log('action.payload-get-',action.payload);
          let eventList = action.payload;
          return Object.assign({}, state, eventList);
        }
        case EVENT_LOGIN_LIST: {
            console.log('action.payload--',action.payload,action);
            let eventLoginList = action.payload;
            return Object.assign({}, state, eventLoginList);
        }
        case ARRIVAL_LIST:{
            let arrivalList = action.payload;
            return Object.assign({}, state, {arrivalList});
        }
        case DEPARTURE_LIST: {
            let departureList = action.payload;
            return Object.assign({}, state, {departureList});
        }
        default:
            return state;
    }
}