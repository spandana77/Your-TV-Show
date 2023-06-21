import axios from "axios";
//import { fake_populars } from "./fake_data";
import { Base_url } from "./config";
//--url 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

export class TVShowAPI {
  static async fetchPopular() {
    const response = await axios.get(
      `${Base_url}tv/popular?api_key=${process.env.REACT_APP_API_KEY_PARAM}`
    );
    console.log(response.data.results);
    return response.data.results;
    //return fake_populars;
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${Base_url}tv/${tvShowId}/recommendations?api_key=${process.env.REACT_APP_API_KEY_PARAM}`
    );
    console.log(response.data.results);
    return response.data.results;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${Base_url}search/tv?api_key=${process.env.REACT_APP_API_KEY_PARAM}&query=${title}`
    );
    // console.log(response.data.results);
    return response.data.results;
  }
}
