import { createTheme } from "@mui/material/styles";

// Create a theme instance.

const cssVariables = {
  "--blue-light": "#2979ff",
  "--black": "#000000",
  "--white": "#ffffff",
  "--border": "1px solid",
  "--pt": "30px",
  "--transtion": "0.2s",
  "--grey": "#222",
  "--bg-dark-blue": "#06121d",
};

const theme = createTheme({
  header: {
    heightHeader: "var(--h-header)",
  },
  // customButton: {
  //   button: {
  //     "&:hover": {
  //       backgroundColor: "transparent", // Bỏ nền khi hover
  //     },
  //   },
  // },
  colorSchemes: {
    light: {
      palette: {
        common: {
          color: "black",
          background: "white",
        },
      },
      borderColorCustom: {
        borderColor: "black",
        border: "#2979ff",
      },
      backgroundCustom: {
        background: "black",
        backgroundMuiPaper: {
          background: "white",
        },
      },
      bgFooter: {
        background: "black",
      },
      colors: {
        color: "var(--blue-light)",
      },
    },
    dark: {
      palette: {
        common: {
          color: "white",
          background: "black",
        },
      },
      borderColorCustom: {
        borderColor: "white",
        border: "white",
      },
      backgroundCustom: {
        background: "white",
        backgroundMuiPaper: {
          background: "black",
        },
      },
      bgFooter: {
        background: "var(--grey)",
      },
      colors: {
        color: "var(--white)",
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        ":root": {
          ...cssVariables,
          ...responsiveVariables,
        },
        html: {
          fontSize: "62.5%", // 10px = 1rem
          scrollBehavior: "smooth",
          scrollSnapType: "y mandatory",
        },
        body: {
          backgroundColor: theme.palette.mode === "dark" ? "#000" : "#fff",
          color: theme.palette.mode === "dark" ? "#fff" : "#000",
          transition: "background-color 0.3s, color 0.3s",
          // overscrollBehavior: "none",
        },
        "&::-webkit-scrollbar": {
          width: "5px",
          height: "5px",
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 5px grey",
        },
        "&::-webkit-scrollbar-thumb": {
          background:
            "linear-gradient(to bottom, #25aae1,  #04befe, #3f86ed, #043ea5)",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background:
            "linear-gradient(to top, #25aae1,  #04befe, #3f86ed, #043ea5)",
        },
      }),
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: "4px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "12px",
          fontSize: "14px",
        },
      },
    },
  },
  breakpoints: {
    values: {
      mobileXs: 0,
      mobileSm: 375.98, //
      mobileMd: 575.98, //
      mobileLg: 600,
      mobileXl: 676.98, //
      // screen tablet
      tabletXs: 767.98, //
      tabletSm: 900,
      tabletMd: 991.98, //
      tabletLg: 1024, //
      // tabletXl: ...
      // screen desktop
      desktopXs: 1199.98, //
      desktopSm: 1200, //
      desktopMd: 1440, //
      desktopLg: 1536, //
      // desktopXl: ...
      // screen Device tuỳ chỉnh
      smallDevice: 551,
      mediumDevice: 751,
      largeDevice: 1080,
    },
  },
});

// down là nhỏ hơn: tối đa
//  up là lớn hơn: tối thiểu
//between là giữ: từ tối thiểu đến tối đa
const responsiveVariables = {
  "--h-header": "70px",
  "--fz-menu": "16px",
  "--gap-menu-item": "24px",
  "--fz-text": "1.6rem",
  "--fz-text-tab": "1.4rem",
  "--fz-h5": "1.5rem",
  "--fz-h6": "2rem",
  "--fz-h4": "2rem",
  "--fz-h2": "2rem",
  "--size-logo": "70px",
  "--pt-section": "30px",
  "--gap-tab": "2.4rem",
  "--fz-text-sm": "1.4rem",
  "--fz-btn": "1.2rem",
  [theme.breakpoints.down("tabletLg")]: {
    "--fz-menu": "14px",
    "--gap-menu-item": "16px",
  },
  [theme.breakpoints.down("mobileXl")]: {
    "--h-header": "60px",
  },
  [theme.breakpoints.down("mobileMd")]: {
    "--size-logo": "50px",
    "--fz-h5": "1.8rem",
    "--pt-section": "20px",
    "--fz-text-sm": "1rem",
    "--fz-h6": "1.5rem",
    "--fz-btn": "1rem",
  },
  [theme.breakpoints.down("tabletMd")]: {
    "--fz-text-tab": "1.2rem",
    "--fz-h2": "2rem",
    "--gap-tab": "1.6rem",
  },
  [theme.breakpoints.down("tabletXs")]: {
    "--fz-h2": "2.5rem",
  },
  [theme.breakpoints.down("mediumDevice")]: {
    "--fz-text": "1.4rem",
  },
  [theme.breakpoints.down("desktopSm")]: {
    // "--fz-btn": "0.6rem",
  },
  [theme.breakpoints.down("mobileSm")]: {
    // "--fz-btn": "0.45rem",
    "--size-logo": "40px",
  },
};

export default theme;
