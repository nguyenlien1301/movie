import axiosInstance from "../utils/axiosInstance";

const authService = {
  getRequestToken() {
    return axiosInstance.get(`/authentication/token/new`);
  },
  login(payload = {}) {
    return axiosInstance.post(
      `/authentication/token/validate_with_login`,
      payload
    );
  },
  // getRequestToken() {
  //   return axiosInstance.get(`/authentication/token/new`, {
  //     params: { api_key: API_KEY },
  //   });
  // },

  // login(payload = {}) {
  //   return axiosInstance.post(
  //     `/authentication/token/validate_with_login`,
  //     payload,
  //     {
  //       params: {
  //         api_key: API_KEY, // Truyền API key ở đây
  //       },
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  // },
};

export default authService;
