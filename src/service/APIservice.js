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

    return fetch(url, reqBody);

  } catch (error) {

  }
};


export function getEventList(option={}){
  let { url , method } = API.ENDPOINT.AUTH.LOGIN;
  let URL = `${API_BASE + url}`;
  option.method = method;
  return requestAPI(URL, option).then(res => res.json());
};