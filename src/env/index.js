let API = {
  ENDPOINT: {
    BASE: 'https://jsonplaceholder.typicode.com/',
    AUTH: {
      LOGIN: { url: 'posts/', method: 'GET' }
    }
  }
};

export default Object.assign({}, API);