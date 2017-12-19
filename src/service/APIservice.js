import API from '../env'
const API_BASE = API.ENDPOINT.BASE;
import { asyncGet } from '../utils/asyncStore'
import store from '../store/configureStore'


async function requestAPI(url, options = {}) {

      let headers = options.headers||{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      };

    const unsubscribe = store.subscribe(() => store.getState())
    let token = store.getState().event.userToken.token ? 
            store.getState().event.userToken.token:
            await asyncGet('token');
    if(token){
        headers.Authorization = `Bearer ${token}`
    }

    let reqBody = {
      method: options.method || "POST",
      headers: headers
    };

    if(options.method.toLowerCase() !== 'get') {
        if(options.headers){
            reqBody['body'] = options.payload
        }
        else{
            reqBody['body'] = JSON.stringify(options.payload || {})
        }

    }
    return fetch(url, reqBody)
    .then(function(resp){
        return resp.json();
    })
    .catch(function(err){
        console.log('Error:', err);
    })
}

export function getEventList(option={}){
  let { url , method } = API.ENDPOINT.AUTH.LOGIN;
  let URL = `${API_BASE + url}`;
  option.method = method;
  return requestAPI(URL, option)
}

export function postEventList(option={}){
    let { url , method } = API.ENDPOINT.AUTH.AUTH_LOGIN;
    let URL = `${API_BASE + url}`;
    option.method = method;
    return requestAPI(URL, option);
}

export function getArrivalList(option={}) {
    let { url , method } = API.ENDPOINT.ARRIVAL.DETAIL;
    let URL = `${API_BASE + url + option.param}`;
    option.method = method;
    return requestAPI(URL, option)
}

export function getArrivalTicketList(option={}) {
    let { url , method } = API.ENDPOINT.ARRIVAL.TICKET;
    let URL = `${API_BASE + url}`;
    option.method = method;
    return requestAPI(URL, option)
}

export function getDepartureList(option={}) {
    let { url , method } = API.ENDPOINT.DEPARTURE.DETAIL;
    let URL = `${API_BASE + url + option.param}`;
    option.method = method;
    return requestAPI(URL, option)
}

export function getDepartureTicektList(option={}) {
    let { url , method } = API.ENDPOINT.DEPARTURE.TICKET;
    let URL = `${API_BASE + url}`;
    option.method = method;
    return requestAPI(URL, option)
}

export function getStayList(option={}) {
    let { url , method } = API.ENDPOINT.STAY.DETAIL;
    let URL = `${API_BASE + url + option.param}`;
    option.method = method;
    return requestAPI(URL, option)
}

export function getVideoUrl(option={}) {
    let { url , method } = API.ENDPOINT.VIDEO.DETAIL;
    let URL = `${API_BASE + url}`;
    option.method = method;
    return requestAPI(URL, option)
}

export function uploadIdProofEventList(option={}){
    let { url , method } = API.ENDPOINT.USER.UPLOAD_ID_PROOF;
    let URL = `${API_BASE + url}`;
    option.method = method;
    return requestAPI(URL, option);
}

export function postNotificationToken(option={}){
    let { url , method } = API.ENDPOINT.NOTIFICATION.POST_TOKEN;
    let URL = `${API_BASE + url +option.params}`;
    option.method = method;
    return requestAPI(URL, option);
}

export function getdownloadIdProofEventList(option={}) {
    let { url , method } = API.ENDPOINT.USER.DOWNLOAD_ID_PROOF;
    let URL = `${API_BASE + url+ option.param}`;
    option.method = method;
    return requestAPI(URL, option)
}

export function deletedownloadIdProofEventList(option={}) {
    let { url , method } = API.ENDPOINT.USER.DELETE_ID_PROOF;
    let URL = `${API_BASE + url+ option.param}`;
    option.method = method;
    return requestAPI(URL, option)
}


export function getNotifCount(option={}) {
    let { url , method } = API.ENDPOINT.NOTIFICATION.NOTIFICATION_COUNT;
    let URL = `${API_BASE + url}`;
    option.method = method;
    return requestAPI(URL, option)
}

export function getAllNotif(option={}) {
    let { url , method } = API.ENDPOINT.NOTIFICATION.GET_NOTIFICATION;
    let URL = `${API_BASE + url}`;
    option.method = method;
    return requestAPI(URL, option)
}

export function readAllNotif(option={}) {
    let { url , method } = API.ENDPOINT.NOTIFICATION.READ_NOTIFICATION;
    let URL = `${API_BASE + url}`;
    option.method = method;
    return requestAPI(URL, option)
}

export function deleteNotif(option={}) {
    let { url , method } = API.ENDPOINT.NOTIFICATION.DELETE_NOTIFICATION;
    let URL = `${API_BASE + url +option.params}`;
    option.method = method;
    return requestAPI(URL, option)
}

export function getAllComments(option={}) {
    let { url,method } = API.ENDPOINT.COMMENTS.GET_COMMENTS;
    let URL = `${API_BASE + url}`;
    option.method = method;
    return requestAPI(URL,option)
}

export function postComm(option={}) {
    let { url , method } = API.ENDPOINT.COMMENTS.POST_COMMENTS;
    let URL = `${API_BASE + url }`;
    option.method = method;
    return requestAPI(URL, option);
}

export function getAllUnapprovedComments(option={}) {
    let { url,method } = API.ENDPOINT.COMMENTS.GET_UNAPPROVED_COMMENTS;
    let URL = `${API_BASE + url}`;
    option.method = method;
    return requestAPI(URL,option)
}

export function approveComm(option={}) {
    let { url,method } = API.ENDPOINT.COMMENTS.APPROVED_COMMENTS;
    let URL = `${API_BASE + url}`;
    option.method = method;
    return requestAPI(URL,option)
}

export function getAgendaList(option={}) {
    let { url , method } = API.ENDPOINT.AGENDA.DETAIL;
    // console.log('options are--->>>>',option);
    let URL = `${API_BASE + url + option.param+'/'+option.day}`;
    option.method = method;
    // console.log('url--->>>',URL);
    return requestAPI(URL, option)
}

export function getExperienceCornerFlag(option={}) {
    let { url , method } = API.ENDPOINT.EXPERIENCECORNER.DETAIL;
    let URL = `${API_BASE + url}`;
    option.method = method;
    return requestAPI(URL,option)
}