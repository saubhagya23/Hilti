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
            UPLOAD_ID_PROOF: {url:'/api/user-ids/upload',method: 'POST'},
            DOWNLOAD_ID_PROOF: {url:'/api/user-ids/', method: 'GET'},
            DELETE_ID_PROOF: {url:'/api/user-ids/delete/',method: 'GET'}
        },
        STAY: {
            DETAIL:{url: `/api/user-details/stay/`,method:'GET'} // get stay details for code 88210
        },
        VIDEO:{
            DETAIL:{url:`/api/documents/welcome-video`,method:'GET'} // get vide url
        },
        NOTIFICATION : {
            POST_TOKEN: {url: '/api/device-tokens/',method: 'PUT'},//set notification token for each user
            NOTIFICATION_COUNT: {url: '/api/notifications/unread',method: 'GET'},
            GET_NOTIFICATION: {url: '/api/notifications',method: 'GET'},
            READ_NOTIFICATION: {url: '/api/notifications/readall',method: 'GET'},
            DELETE_NOTIFICATION: {url: '/api/notifications/readall',method: 'GET'},
        }
    }
};
export default Object.assign({}, API);