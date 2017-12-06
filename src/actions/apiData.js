import {getEventList, postEventList,getArrivalList,getDepartureList,getStayList,getVideoUrl} from '../service/APIservice';
import { EVENT_LIST, EVENT_LOGIN_LIST,ARRIVAL_LIST,DEPARTURE_LIST,STAY_LIST,VIDEO_URL } from '../constants'

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
                type: EVENT_LOGIN_LIST,
                payload: response
            });
            return response;
        }, function(err){
          console.log(' error', err)
        }).catch(function(err){
          console.log('catch error', err)
        });
    };
}

export function getArrivals(data) {
    return function (dispatch) {
        return getArrivalList(data).then(function (response) {
            dispatch({
                type: ARRIVAL_LIST,
                payload: response
            });
            return response;
        });
    };
}

export function getStay(data) {
    return function (dispatch) {
        return getStayList(data).then(function (response) {
            dispatch({
                type: STAY_LIST,
                payload: response
            });
            return response;
        })
    }
}

export function getDepartures(data) {
    return function (dispatch) {
        return getDepartureList(data).then(function (response) {
            dispatch({
                type: DEPARTURE_LIST,
                payload: response
            });
            return response;
        });
    };
}

export function getVideo() {
    return function (dispatch) {
        return getVideoUrl().then(function (response) {
            dispatch({
                type: VIDEO_URL,
                payload: response
            });
            return response;
        });
    };
}