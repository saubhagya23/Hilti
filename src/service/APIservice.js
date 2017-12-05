import API from '../env'
const API_BASE = API.ENDPOINT.BASE;
import { asyncGet } from '../utils/asyncStore'

async function requestAPI(url, options = {}) {


      let headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      };

      let token = await asyncGet('token');
      if(token){
          console.log("token is:",token)
          headers.Authorization = `Bearer ${token}`
      }

      let reqBody = {
      method: options.method || "POST",
      headers: headers
      };

    if(options.method.toLowerCase() !== 'get') {
      reqBody['body'] = JSON.stringify(options.payload || {})
    }

    return fetch(url, reqBody).then(res=> res.json());


};


export function getEventList(option={}){
  let { url , method } = API.ENDPOINT.AUTH.LOGIN;
  let URL = `${API_BASE + url}`;
  option.method = method;
  return requestAPI(URL, option)
};

export function postEventList(option={}){
    let { url , method } = API.ENDPOINT.AUTH.AUTH_LOGIN;
    let URL = `${API_BASE + url}`;
    option.method = method;
    console.log('options--',option);
    return requestAPI(URL, option);
};

export function getArrivalList(option={}) {
    let { url , method } = API.ENDPOINT.ARRIVAL.DETAIL;
    let URL = `${API_BASE + url}`;
    option.method = method;
    return requestAPI(URL, option)
}

export function getDepartureList(option={}) {
    let { url , method } = API.ENDPOINT.DEPARTURE.DETAIL;
    let URL = `${API_BASE + url}`;
    option.method = method;
    return requestAPI(URL, option)
}

export function getStayList(option={}) {
    let { url , method } = API.ENDPOINT.STAY.DETAIL;
    let URL = `${API_BASE + url}`;
    option.method = method;
    return requestAPI(URL, option)
}

export function uploadIdProofEventList(option={}){
    let { url , method } = API.ENDPOINT.USER.UPLOAD_ID_PROOF;
    let URL = `${API_BASE + url}`;
    option.method = method;
    console.log('options--',option);
    return requestAPI(URL, option);
};