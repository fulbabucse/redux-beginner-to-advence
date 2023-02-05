import axios from "axios";

let url;

switch (process.env.REACT_APP_DEVELOPMENT) {
  case "PRODUCTION":
    url = "https://shopper-s-delight-server.vercel.app";
    break;
  case "DEVELOPMENT":
    url = "https://shopper-s-delight-server.vercel.app";
    break;
  default:
    url = "https://shopper-s-delight-server.vercel.app";
}

const instance = axios.create({
  baseURL: url,
});

export default instance;
