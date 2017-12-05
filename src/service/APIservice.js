import API from '../env'
const API_BASE = API.ENDPOINT.BASE;

function requestAPI(url, options = {}) {
  try {
    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    let reqBody = {
      method: options.method || "POST",
      headers: headers
    };

    if(options.method.toLowerCase() !== 'get') {
      reqBody['body'] = JSON.stringify(options.payload || {})
    }

    return fetch(url, reqBody).then(res=> res.json());

  } catch (error) {

  }
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

export function uploadIdProofEventList(option={}){
    let { url , method } = API.ENDPOINT.USER.UPLOAD_ID_PROOF;
    let URL = `${API_BASE + url}`;
    option.method = method;
    console.log('options--',option);
    return requestAPI(URL, option);
};