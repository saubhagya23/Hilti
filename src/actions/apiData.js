import {getEventList, postEventList,getArrivalList} from '../service/APIservice';
import { EVENT_LIST,ARRIVAL_LIST } from '../constants'

export function getEvent() {
  return function (dispatch) {
    return getEventList().then(function (response) {
      dispatch({
        type: EVENT_LIST,
        payload: response
      });
      return response;
    });
  };
}

export function postEvent(empLoginInfo) {
    return function (dispatch) {
        return postEventList(empLoginInfo).then(function (response) {
            dispatch({
                type: EVENT_LIST,
                payload: response
            });
            return response;
        });
    };
}


export function getArrivals() {
    console.log("get arrivals called");
    return function (dispatch) {
        return getArrivalList().then(function (response) {
            dispatch({
                type: ARRIVAL_LIST,
                payload: response
            });
            return response;
        });
    };
}



