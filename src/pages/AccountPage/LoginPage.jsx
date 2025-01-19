import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ButtonCustom from "../../components/Button";
import Input from "../../components/Input";
import {
  handleLogin,
  handleLogout,
  initializeAuthState,
} from "../../store/reducer/authReducer";
import ComponentLoading from "../../components/ComponentLoading";
import ShareLink from "../../components/ShareLink";
import { PATH_URL } from "../../constants/pathurl";
import { useDispatch, useSelector } from "react-redux";
import { MESSAGE } from "../../constants/validate";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PATHS from "../../constants/path";
import { BUTTON_CUSTOM_TYLES } from "../../components/CustomStyleds";

// const [rememberMe, setRememberMe] = useState(false); // State cho checkbox
// const handleCheckboxChange = () => {
//   setRememberMe(!rememberMe); // Chuyển trạng thái checkbox
// };
const LoginPage = () => {
  const { loading, disabled } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (data) {
      try {
        const res = await dispatch(handleLogin(data));
        navigate(PATHS.HOME);
      } catch (error) {
        console.log("🚀error---->", error);
      }
    }
  };
  useEffect(() => {
    dispatch(initializeAuthState());
  }, [disabled]);
  const _onLogout = () => {
    dispatch(handleLogout());
  };

  return (
    <>
      {loading && <ComponentLoading />}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
          height: "100%",
        }}
      >
        <>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Đăng nhập
          </Typography>
          <Box component="form" sx={{ width: "100%" }}>
            <Input
              label="Mật khẩu"
              requird
              disabled={disabled}
              placeholder="Tên đăng nhập"
              {...register("username", {
                required: MESSAGE.required,
              })}
              error={errors?.username?.message || ""}
            />
            <Input
              label="Mật khẩu"
              type="password"
              requird
              disabled={disabled}
              placeholder="Mật khẩu"
              {...register("password", {
                required: MESSAGE.required,
              })}
              error={errors?.password?.message || ""}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              <ButtonCustom
                variant="contained"
                type="submit"
                disabled={disabled}
                sx={{ mt: "20px", mb: "10px" }}
                onClick={handleSubmit(onSubmit)}
              >
                LOGIN
              </ButtonCustom>
              <ButtonCustom
                variant="contained"
                disabled={!disabled}
                sx={{ mt: "20px", mb: "10px" }}
                onClick={_onLogout}
              >
                LOG OUT
              </ButtonCustom>
            </Box>
          </Box>

          {/* Dòng chữ "hoặc tiếp tục với" với đường kẻ bên trái và bên phải */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: 2,
              width: "100%",
            }}
          >
            <Divider sx={{ flex: 1, bgcolor: "white" }} />
            <Typography variant="body2" sx={{ mx: 2 }}>
              Or continue with
            </Typography>
            <Divider sx={{ flex: 1, bgcolor: "white" }} />
          </Box>
          {/* Các nút đăng nhập với biểu tượng */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <ShareLink title={"Email"} path={PATH_URL}>
              <Button color="inherit" sx={BUTTON_CUSTOM_TYLES}>
                <EmailIcon />
              </Button>
            </ShareLink>
            <ShareLink type="facebook" title={"Facebook"} path={PATH_URL}>
              <Button color="inherit" sx={BUTTON_CUSTOM_TYLES}>
                <FacebookIcon />
              </Button>
            </ShareLink>
            <ShareLink type="instagram" title={"Instagram"} path={PATH_URL}>
              <Button color="inherit" sx={BUTTON_CUSTOM_TYLES}>
                <InstagramIcon />
              </Button>
            </ShareLink>
            <ShareLink type="twitter" title={"Twitter"} path={PATH_URL}>
              <Button color="inherit" sx={BUTTON_CUSTOM_TYLES}>
                <TwitterIcon />
              </Button>
            </ShareLink>
          </Box>
        </>
      </Box>
    </>
  );
};

export default LoginPage;
