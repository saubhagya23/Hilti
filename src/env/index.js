let API = {
    ENDPOINT: {
        BASE: 'http://13.68.114.98:9000',
        AUTH: {
            LOGIN: {url: '/api/user-details/me', method: 'GET'},
            AUTH_LOGIN: {url: '/auth/local', method: 'POST'}
        },
        ARRIVAL: {
            DETAIL: {url: `/api/arrivals/detail/88210`, method: 'GET'} //get arrival details for code:88210
        },
        DEPARTURE: {
            DETAIL: {url: `/api/departures/detail/88210`,method:'GET'}//departure details for code:88210
        },
        USER: {
            UPLOAD_ID_PROOF: {url:'/api/user-ids/upload',method: 'POST'},
            DOWNLOAD_ID_PROOF: {url:'/api/user-ids/89351', method: 'GET'},
            DELETE_ID_PROOF: {url:'/api/user-ids/delete/89351',method: 'GET'}
        },
        STAY: {
            DETAIL:{url: `/api/user-details/stay/88210`,method:'GET'} // get stay details for code 88210
        }

    }
};
export default Object.assign({}, API);