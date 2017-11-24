import {getEventList, postEventList} from '../service/APIservice';
import { EVENT_LIST, EVENT_LOGIN_LIST } from '../constants'

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