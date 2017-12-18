import {getEventList, postEventList,getArrivalList,getDepartureList,getStayList,getVideoUrl,uploadIdProofEventList,getdownloadIdProofEventList, deletedownloadIdProofEventList, postNotificationToken, getNotifCount, getAllNotif, readAllNotif, deleteNotif, getArrivalTicketList, getDepartureTicektList, getAllComments, postComm, getAllUnapprovedComments, approveComm,getAgendaList} from '../service/APIservice';
import { EVENT_LIST, EVENT_LOGIN_LIST,ARRIVAL_LIST,DEPARTURE_LIST,STAY_LIST,VIDEO_URL ,USER_DETAIL,UPLOAD_ID_PROOF_LIST, DOWNLOAD_ID_PROOF_LIST, DELETE_ID_PROOF_LIST, NOTIFICATION_TOKEN, NOTIF_COUNT, GET_NOTIF, READ_NOTIF, DELETE_NOTIF , ARRIVAL_TICKET, DEPARTURE_TICKET,GET_COMMENTS,POST_COMMENTS,GET_UNAPPROVED_COMMENTS,APPROVE_COMMENTS,AGENDA_LIST} from '../constants'

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

export function getArrivalTicket() {
    return function (dispatch) {
        return getArrivalTicketList().then(function (response) {
            dispatch({
                type: ARRIVAL_TICKET,
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

export function getDepartureTicket() {
    return function (dispatch) {
        return getDepartureTicektList().then(function (response) {
            dispatch({
                type: DEPARTURE_TICKET,
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

export function setUserDetail(userInfo) {
    return function (dispatch) {
        dispatch({
            type:USER_DETAIL,
            payload:userInfo
        });
        return;
    }

}

export function uploadIdProofEvent(uploadObj) {
    return function (dispatch) {
        return uploadIdProofEventList(uploadObj).then(function (response) {
            dispatch({
                type: UPLOAD_ID_PROOF_LIST,
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


export function getdownloadIdProofEvent(data) {
    return function (dispatch) {
        return getdownloadIdProofEventList(data).then(function (response) {
            dispatch({
                type: DOWNLOAD_ID_PROOF_LIST,
                payload: response
            });
            return response;
        });
    };
}

export function deletedownloadIdProofEvent(data) {
    return function (dispatch) {
        return deletedownloadIdProofEventList(data).then(function (response) {
            dispatch({
                type: DELETE_ID_PROOF_LIST,
                payload: response
            });
            return response;
        });
    };
}
export function postUserNotificationToken (data) {
    return function (dispatch) {
        return postNotificationToken(data).then(function (response) {
            dispatch({
                type: NOTIFICATION_TOKEN,
                payload: response
            });
            return response;
        }, function(err){
          console.log('notification error', err)
        }).catch(function(err){
          console.log('notification catch error', err)
        })
    }
}
export function getNotificationCount(data) {
    return function (dispatch) {
        return getNotifCount(data).then(function (response) {
            dispatch({
                type: NOTIF_COUNT,
                payload: response
            });
            return response;
        });
    };
}
export function getAllNotification(data) {
    return function (dispatch) {
        return getAllNotif(data).then(function (response) {
            dispatch({
                type: GET_NOTIF,
                payload: response
            });
            return response;
        });
    };
}
export function readAllNotification(data) {
    return function (dispatch) {
        return readAllNotif(data).then(function (response) {
            dispatch({
                type: READ_NOTIF,
                payload: response
            });
            return response;
        });
    };
}

export function getComments() {
    return function (dispatch) {
        return getAllComments().then(function (response) {
            dispatch({
                type: GET_COMMENTS,
                payload: response
            });
            return response;
        })
    }
}

export function postComment(data) {
    return function (dispatch) {
        return postComm(data).then(function (response) {
            dispatch({
                type: POST_COMMENTS,
                payload: response
            });
            return response;
        })
    }
}

export function deleteNotification (data) {
    return function (dispatch) {
        return deleteNotif(data).then(function (response) {
            dispatch({
                type: DELETE_NOTIF,
                payload: response
            });
            return response;
        }, function(err){
          console.log('notification error', err)
        }).catch(function(err){
          console.log('notification catch error', err)
        })
    }
}
export function getUnapprovedComments() {
    return function (dispatch) {
        return getAllUnapprovedComments().then(function (response) {
            dispatch({
                type: GET_UNAPPROVED_COMMENTS,
                payload: response
            });
            return response;
        })
    }
}

export function approveComment(data) {
    return function (dispatch) {
        return approveComm(data).then(function (response) {
            dispatch({
                type: APPROVE_COMMENTS,
                payload: response
            });
            return response;
        })
    }

}

export function getAgendaData(data) {
    console.log('data in apidata---agenda-->>',data);
    return function (dispatch) {
        return getAgendaList(data).then(function (response) {
            dispatch({
                type: AGENDA_LIST,
                payload: response
            });
            return response;
        });
    };
}