import {getEventList, postEventList} from '../service/APIservice';
import { EVENT_LIST } from '../constants'

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
    console.log('data in actions--',empLoginInfo);
    return function (dispatch) {
        return postEventList(empLoginInfo).then(function (response) {
          console.log('response', response)
            dispatch({
                type: EVENT_LIST,
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