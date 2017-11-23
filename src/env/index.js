let API = {
  ENDPOINT: {
      BASE: 'http://13.68.114.98:9000',
      AUTH: {
          LOGIN: {url: '/api/user-details/me', method: 'GET'},
          AUTH_LOGIN: {url: '/auth/local', method: 'POST'}
      },
      DOWNLOAD: {
          EXCEL: {url: `/api/documents/download/Travel Overview.xlsx`, method: 'GET'} //download for excel file TravelOverview.xlsx
      }
  }
};
export default Object.assign({}, API);