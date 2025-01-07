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
      color: "#ff3d00",
    },
    a: {
      textDecoration: "none",
      color: (theme) => theme.palette.common.color,
      transition: "var(--transtion)",
      "&:hover": {
        color: "#ff3d00",
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
        color: "#018ef5",
        backgroundColor: "rgba(1, 142, 245, 0.2)",
      },
    },
  },
};
