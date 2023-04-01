import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f0a20440a0114f3ab0799ac5802bff71",
  },
});
