import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../services/authService";
import { message } from "antd";
import tokenMethod from "../../utils/token";

const initialState = {
  disabled: !!tokenMethod.get(),
  loading: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogout: (state, action) => {
      tokenMethod.remove();
      state.disabled = false;
      message.success("Logout successful");
    },
    initializeAuthState: (state) => {
      // Thiết lập lại trạng thái khi tải trang
      state.disabled = !!tokenMethod.get();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleLogin.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleLogin.fulfilled, (state, action) => {
      state.disabled = true;
      state.loading = false;
    });
    builder.addCase(handleLogin.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const handleLogin = createAsyncThunk(
  "auth/handleLogin",
  async (loginData, { getState, rejectWithValue }) => {
    const requestTokenResponse = await authService.getRequestToken();
    if (requestTokenResponse?.data?.request_token) {
      const requestToken = requestTokenResponse.data.request_token;
      const payload = {
        username: loginData.username,
        password: loginData.password,
        request_token: requestToken,
      };
      try {
        const res = await authService.login(payload);

        const { request_token } = res?.data || {};
        console.log("🚀request_token---->", request_token);
        const { username } = payload;
        tokenMethod.set({ username, request_token });
        message.success("Đăng nhập thành công");
        return true;
      } catch (error) {
        console.log("error", error);
        const errorInfo = error?.response?.data;
        if (
          errorInfo.status_message ===
          "Invalid username and/or password: You did not provide a valid login."
        ) {
          message.error("Username hoặc password không đúng");
        }
        return rejectWithValue(errorInfo);
      }
    }
  }
);

// const requestTokenResponse = await authService.getRequestToken();
// if (requestTokenResponse?.data?.request_token) {
//   const requestToken = requestTokenResponse.data.request_token;
//   const payload = {
//     username: loginData.username,
//     password: loginData.password,
//     request_token: requestToken,
//   };

//   try {
//     const res = await authService.login(payload);
//     // console.log("🚀resLogin---->", res);
//     if (!!res) {
//       message.success("Đăng nhập thành công");
//       navigate(PATHS.HOME);
//       // tokenMethod.set();
//     }
//   } catch (error) {
//     console.log("🚀error---->", error);
//     message.error("Đăng nhập thất bại");
//   } finally {
//     callback?.();
//   }
// } else {
//   message.error("Đăng nhập thất bại");
// }

export const { actions, reducer: authReducer } = authSlice;
export const { handleLogout, initializeAuthState } = actions;
export default authReducer;
