let API = {
    ENDPOINT: {
        BASE: 'http://13.68.114.98:9000',
        AUTH: {
            LOGIN: {url: '/api/user-details/me', method: 'GET'},
            AUTH_LOGIN: {url: '/auth/local', method: 'POST'}
        },
        ARRIVAL: {
            DETAIL: {url: `/api/arrivals/detail/`, method: 'GET'} //get arrival details for code:88210
        },
        DEPARTURE: {
            DETAIL: {url: `/api/departures/detail/`,method:'GET'}//departure details for code:88210
        },
        USER: {
            UPLOAD_ID_PROOF: {url:'/api/user-ids/upload',method: 'POST'}
        },
        STAY: {
            DETAIL:{url: `/api/user-details/stay/`,method:'GET'} // get stay details for code 88210
        },
        VIDEO:{
            DETAIL:{url:`/api/documents/welcome-video`,method:'GET'} // get vide url
        }

    }
};
export default Object.assign({}, API);