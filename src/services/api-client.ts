import axios from "axios";

export interface FetchRespone<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f0a20440a0114f3ab0799ac5802bff71",
  },
});
