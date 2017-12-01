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
        }

    }
};
export default Object.assign({}, API);