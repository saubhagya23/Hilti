import { EVENT_LIST, EVENT_LOGIN_LIST ,UPLOAD_ID_PROOF_LIST, DOWNLOAD_ID_PROOF_LIST, DELETE_ID_PROOF_LIST } from '../constants'
import {ARRIVAL_LIST, DEPARTURE_LIST,STAY_LIST,VIDEO_URL,USER_DETAIL,NOTIF_COUNT,GET_NOTIF ,READ_NOTIF} from "../constants/index";
const initialState = {
    // eventList: [],
    eventLoginList:{},
    arrivalList:[],
    departureList:[],
    stayList:[],
    uploadIdProofEvent:{},
    downloadIdProofEvent:[],
    deleteIdProofEvent:[],
    video:{},
    userDetail:{},
    notificationCount: {},
    allNotifications: {},
}

export function event (state = initialState, action) {
    switch (action.type) {
        /*case EVENT_LIST: {
            let eventList = action.payload;
            return Object.assign({}, state, eventList);
        }*/
        case EVENT_LOGIN_LIST: {
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
        case STAY_LIST:{
            let stayList = action.payload;
            return Object.assign({},state,{stayList})
        }
        case VIDEO_URL:{
            let video = action.payload;
            return Object.assign({},state,{video})
        }
        case USER_DETAIL:{
            let userDetail = action.payload;
            return Object.assign({}, state, {userDetail});
        }
        case NOTIF_COUNT:{
            let notificationCount = action.payload;
            return Object.assign({}, state, {notificationCount});
        }
        case GET_NOTIF: {
            let allNotifications = action.payload;
            return Object.assign({}, state, {allNotifications});
        }
        case READ_NOTIF: {
            let notificationCount = {count: 0};
            return Object.assign({}, state, {notificationCount});
        }
        case UPLOAD_ID_PROOF_LIST: {
            console.log('action.payload--',action.payload,action);
            let uploadIdProofEvent = action.payload;
            return Object.assign({}, state, uploadIdProofEvent);
        }
        case DOWNLOAD_ID_PROOF_LIST: {
            console.log('action.payload-download--*********--',action.payload,action);
            let downloadIdProofEvent = action.payload;
            console.log('data set---->>>---->>',downloadIdProofEvent);
            return Object.assign({}, state, {downloadIdProofEvent});
        }
        case DELETE_ID_PROOF_LIST: {
            console.log('data deleted----',action.payload);
            let downloadIdProofEvent = [];
            return Object.assign({},state,{downloadIdProofEvent});
        }
        default:
            return state;
    }
}