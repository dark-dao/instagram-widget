import _ from 'lodash';
import request from 'node-fetch';

const metods = ['get', 'post', 'put', 'patch', 'delete'];
class ApiClient {
  constructor() {
    metods.forEach((method) => {
      this[method] = (url, rest) => {
        let options = {
          method: _.upperCase([method]),
          headers: {
              //'Content-Type': 'application/json'
          },
          body: rest,
        };
        return request(`https://api.instagram.com${url}`, options).then((response) => {
          return response.json();
        }).catch((error) => {
          return error.json();
        });
      };
    });
  }
}
export default ApiClient;
