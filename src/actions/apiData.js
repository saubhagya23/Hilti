import {getEventList, postEventList,getArrivalList,getDepartureList, uploadIdProofEventList,getStayList} from '../service/APIservice';
import { EVENT_LIST, EVENT_LOGIN_LIST,ARRIVAL_LIST,DEPARTURE_LIST,UPLOAD_ID_PROOF_LIST,STAY_LIST } from '../constants'

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

export function getArrivals() {
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

export function getStay() {
    return function (dispatch) {
        return getStayList().then(function (response) {
            dispatch({
                type: STAY_LIST,
                payload: response
            });
            return response;
        })
    }
}

export function getDepartures() {
    console.log("get arrivals called");
    return function (dispatch) {
        return getDepartureList().then(function (response) {
            dispatch({
                type: DEPARTURE_LIST,
                payload: response
            });
            return response;
        });
    };
}

export function uploadIdProofEvent(uploadObj) {
    console.log('event object upload',uploadObj);
    return function (dispatch) {
        return uploadIdProofEventList(uploadObj).then(function (response) {
            dispatch({
                type: UPLOAD_ID_PROOF_LIST,
                payload: response
            });
            console.log('response of upload------>>>>>',response);
            return response;
        }, function(err){
            console.log(' error', err)
        }).catch(function(err){
            console.log('catch error', err)
        });
    };
}