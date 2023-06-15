import axios from "axios";
import { fake_populars } from "./fake_data";
//--url 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

const Base_url = "https://api.themoviedb.org/3/";
const api_key_param = "?api_key=f2bae4251ac4016f80234c1ed23033f3";
export class TVShowAPI {
  static async fetchPopular() {
    //Request
    // const response = await axios.get(`${Base_url}tv/popular${api_key_param}`);
    // console.log(response.data.results);
    //  return response.data.results;
    //Return
    return fake_populars;
  }
}
