import axios from "axios";
import { BASE_URL } from "../constants/environment";
import { API_KEY } from "../constants/environment";
import tokenMethod from "./token";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  // Trường hợp 1
  // Giả sử đây là tham số mặc định tự config
  // khi viết ...config.params thì tham số mặc định này sẽ luôn đc có trong config.params
  // params: {
  //   language: 'en-US', // Đây là tham số mặc định
  // },
  // Trường hợp 2: là mình có thể truyền vào khi gọi API
  // ví dụ: paramsService.getParams(123, { region: 'US' });
  // const movieDetailService = {
  //   getMovieDetail(id, additionalParams = {}) {
  //     return axiosInstance.get(`/movie/${id}`, {
  //       params: { ...additionalParams },
  //     });
  //   },
  // };
  //  params: { ...additionalParams }, lúc này params này sẽ đc truyền vào là ...config.params
});
export default axiosInstance;

// axiosInstance.interceptors.response.use(
//   (response)=> {
//     return response;
//   },
//   async (error)=> {

//   }
// )
// interceptors: Cho phép can thiệp vào quá trình gửi đi (request) từ server
axiosInstance.interceptors.request.use(
  (config) => {
    // Xử lí yêu cầu trước khi gửi đi
    // config.params: là thuộc tính của axios. Nó chứa các tham số truy vấn (query parameters) sẽ được tự động thêm vào URL của request.
    config.params = { language: "vi-VN", api_key: API_KEY, ...config.params };
    config.headers = { "Content-Type": "application/json" };
    return config;
  },
  (error) => {
    // Xử lí lỗi nếu có
    return Promise.reject(error);
  }
);
