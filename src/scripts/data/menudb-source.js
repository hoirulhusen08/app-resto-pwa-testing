import API_ENDPOINT from '../globals/api-endpoint';

class TheMenuDbSource {
  static async nowGetMenu() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailMenu(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheMenuDbSource;
