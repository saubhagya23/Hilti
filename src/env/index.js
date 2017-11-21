let API = {
  ENDPOINT: {
    BASE: 'https://li-ppsingh:9000',
    AUTH: {
      LOGIN: { url: '/api/user-details/me', method: 'GET' },
        AUTH_LOGIN: {url: '/auth/local', method:'POST'}
    }
  }
};

export default Object.assign({}, API);