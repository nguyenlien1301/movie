import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Paper,
  Container,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Facebook, Phone, MailOutline } from "@mui/icons-material";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { MESSAGE } from "../../constants/validate";
import ShareLink from "../../components/ShareLink";
import { BUTTON_CUSTOM_TYLES } from "../../components/CustomStyleds";
import { PATH_URL } from "../../constants/pathurl";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ButtonCustom from "../../components/Button";

const ProfilePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("🚀data---->", data);
    // if (data) {
    //   try {
    //     const res = await dispatch(handleLogin(data));
    //     navigate(PATHS.HOME);
    //   } catch (error) {
    //     console.log("🚀error---->", error);
    //   }
    // }
  };
  return (
    <Box
      sx={{
        pt: (theme) => `calc(${theme.header.heightHeader} + var(--pt))`,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { mobileXs: "column", mobileLg: "row" },
          gap: 3,
        }}
      >
        <Paper sx={{ flex: 1, padding: 2 }}>
          <Avatar
            alt="Profile Picture"
            src="https://i.pinimg.com/564x/38/ec/77/38ec776c73b760bf46508e929b799bc8.jpg"
            sx={{ width: 150, height: 150, marginBottom: 2, mx: "auto" }}
          />
          <Divider />
          <Box sx={{ mt: "20px" }}>
            <Typography variant="h6">Giới thiệu</Typography>
            <Box sx={{ marginTop: 2 }}>
              <Typography>
                <MailOutline /> --
              </Typography>
              <Typography>
                <Phone /> --
              </Typography>
              <Typography>
                <Facebook /> --
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mt: "20px",
              }}
            >
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
          </Box>
        </Paper>
        <Paper sx={{ flex: 2, padding: 3 }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: "var(--fz-h4)",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Thông tin cá nhân
          </Typography>
          <Box component="form" sx={{ mt: "30px", mb: "20px" }}>
            <Grid container spacing={2}>
              <Grid item size={{ mobileXs: 12, tabletSm: 6 }}>
                <Input
                  label="Họ và tên"
                  requird
                  fullWidth
                  // disabled={disabled}
                  placeholder="Họ và tên"
                  {...register("username", {
                    required: MESSAGE.required,
                  })}
                  error={errors?.username?.message || ""}
                />
              </Grid>
              <Grid item size={{ mobileXs: 12, tabletSm: 6 }}>
                <Input
                  label="Số điện thoại"
                  requird
                  fullWidth
                  //   disabled={disabled}
                  placeholder="Số điện thoại"
                  {...register("phone", {
                    required: MESSAGE.required,
                  })}
                  error={errors?.username?.message || ""}
                />
              </Grid>
              <Grid item size={{ mobileXs: 12, tabletSm: 6 }}>
                <Input
                  label="Email"
                  fullWidth
                  //   disabled={disabled}
                  placeholder="Email"
                  {...register("email", {
                    required: MESSAGE.required,
                  })}
                  error={errors?.username?.message || ""}
                />
              </Grid>
              <Grid item size={{ mobileXs: 12, tabletSm: 6 }}>
                <Input
                  label="Mật khẩu"
                  fullWidth
                  type="password"
                  //   disabled={disabled}
                  placeholder="Mật khẩu"
                  {...register("password", {
                    required: MESSAGE.required,
                  })}
                  error={errors?.username?.message || ""}
                />
              </Grid>
              <Grid item size={{ mobileXs: 12 }}>
                <Input
                  label="Facebook"
                  fullWidth
                  //   disabled={disabled}
                  placeholder="Facebook"
                  {...register("facebook", {
                    required: MESSAGE.required,
                  })}
                  error={errors?.username?.message || ""}
                />
              </Grid>
              <Grid item size={{ mobileXs: 12 }}>
                <Input
                  label="Website"
                  fullWidth
                  //   disabled={disabled}
                  placeholder="Website"
                  {...register("website", {
                    required: MESSAGE.required,
                  })}
                  error={errors?.username?.message || ""}
                />
              </Grid>
              <Grid item size={{ mobileXs: 12 }}>
                <Input
                  label="Giới thiệu bản thân"
                  fullWidth
                  //   disabled={disabled}
                  placeholder="Website"
                  {...register("website", {
                    required: MESSAGE.required,
                  })}
                  error={errors?.username?.message || ""}
                />
              </Grid>
              <Grid item size={{ mobileXs: 12 }} sx={{ textAlign: "center" }}>
                <ButtonCustom
                  // sx={{ width: "fit-content", margin: "0 auto" }}
                  // sx={{
                  //   padding: { mobileXs: "8px 16px", mobileSm: "10px 16px" },
                  // }}
                  onClick={onSubmit}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Lưu thông tin
                </ButtonCustom>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ProfilePage;
