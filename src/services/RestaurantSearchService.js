import request from 'superagent';

const baseURL = 'https://developers.zomato.com/api/v2.1/';
const userAPIKey = '86399f92b1ee95d96163e046640b6162';

export default class RestaurantSearchService {
	searchRestaurantByWildString = (wildString, done) => {
		let url = `${baseURL}search?q=${wildString}`;

		return request.get(url)
			.set('user-key', userAPIKey)
      .end((err, res) => {
      	if(err) {
      		let msg = this.normalizeHTTPError(err, res);
      		return done({error: msg});
      	}
        return done(null, res.body);
      })
	}

	normalizeHTTPError = (err, res) => {
    let msg = null;

	  if(res && res.body) {
	    msg = res.body.error;
	  } else if (err.response) {
	    msg = `Something wrong ${err.response.statusText}`;
	  } else {
	    msg = `Something wrong, possible network issues or server not responding..!`
	  }

	  return msg;
  }

  findRestaurantById = (resId, done) => {
  	let url = `${baseURL}restaurant?res_id=${resId}`;

		return request.get(url)
			.set('user-key', userAPIKey)
      .end((err, res) => {
      	if(err) {
      		let msg = this.normalizeHTTPError(err, res);
      		return done({error: msg});
      	}
        return done(null, res.body);
      })
  }
}