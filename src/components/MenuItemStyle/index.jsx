export const MENU_ITEM_STYLES = {
  position: "relative",
  fontSize: "var(--fz-menu)",
  fontWeight: "bold",
  padding: { tabletSm: "23px 5px" },
  margin: 0,
  cursor: "pointer",
  "&:hover ul": {
    opacity: 1,
    visibility: "visible", // Hiển thị menu con khi hover vào nút
  },
  li: {
    listStyleType: "none",
    transition: "var(--transtion)",
    "&:hover": {
      color: "rgb(252, 185, 65)",
    },
    a: {
      textDecoration: "none",
      color: (theme) => theme.palette.common.color,
      transition: "var(--transtion)",
      "&:hover": {
        color: "rgb(252, 185, 65)",
      },
    },
  },
  ul: {
    position: "absolute",
    top: "100%",
    width: "max-content",
    opacity: 0,
    visibility: "hidden",
    backgroundColor: (theme) => theme.palette.common.background,
    borderBottomRightRadius: "5px",
    borderBottomLeftRadius: "5px",
    paddingLeft: 0,
    minWidth: "200px",
    transition: "all 0.3s",
    li: {
      listStyleType: "none",
    },
    a: {
      textDecoration: "none",
      color: (theme) => theme.palette.common.color,
      fontSize: "16px",
      fontWeight: "400",
      padding: "5px 10px",
      display: "block",
      "&:hover": {
        color: "rgb(252, 185, 65)",
        backgroundColor: " rgba(252, 185, 65, 0.2)",
      },
    },
  },
};
