import axios from "axios";

const API_URL = "https://cleverbot-backend.herokuapp.com/";

const cleverAPI = {
  cleverReply: (input) => {
    return axios.post(`${API_URL}${input}`);
  },
};

export default cleverAPI;
