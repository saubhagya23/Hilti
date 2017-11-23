import {getEventList, postEventList,getExcelFile} from '../service/APIservice';
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

export function getFile() {
    return function (dispatch) {
        return getExcelFile().then(function (response) {
            console.log("response for getFileStream is :",response);
            dispatch({
                type: EVENT_LIST,
                payload: response
            });
            return response;
        });
    };
}