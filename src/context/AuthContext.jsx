// import { createContext, useContext, useEffect, useState } from "react";
// import authService from "../services/authService";
// import { message } from "antd";
// import { useLocation, useNavigate } from "react-router-dom";
// import PATHS from "../constants/path";
// const AuthContext = createContext({});

// const AuthContextProvider = ({ children }) => {
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const [page, setPage] = useState(1);
//   const [movies, setMovies] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//     // setMovies([]);
//   }, [pathname]);

//   const fetchMoreData = () => {
//     // Tăng trang để tải thêm dữ liệu
//     if (hasMore) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   const handleLogin = async (loginData, callback) => {
//     const requestTokenResponse = await authService.getRequestToken();
//     if (requestTokenResponse?.data?.request_token) {
//       const requestToken = requestTokenResponse.data.request_token;
//       const payload = {
//         username: loginData.username,
//         password: loginData.password,
//         request_token: requestToken,
//       };

//       try {
//         const res = await authService.login(payload);
//         // console.log("🚀resLogin---->", res);
//         if (!!res) {
//           message.success("Đăng nhập thành công");
//           navigate(PATHS.HOME);
//           // tokenMethod.set();
//         }
//       } catch (error) {
//         console.log("🚀error---->", error);
//         message.error("Đăng nhập thất bại");
//       } finally {
//         callback?.();
//       }
//     } else {
//       message.error("Đăng nhập thất bại");
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         handleLogin,
//         fetchMoreData,
//         setMovies,
//         setHasMore,
//         page,
//         movies,
//         hasMore,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;
// //
// export const useAuthContext = () => useContext(AuthContext);
