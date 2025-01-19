import { Tab } from "@mui/material";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import React from "react";

const TabsItem = ({
  value,
  handleChangeValue,
  filterGenres,
  loading,
  ...rest
}) => {
  if (loading) {
    return null;
  }
  return (
    <Tabs
      {...rest}
      value={value}
      onChange={handleChangeValue}
      variant="scrollable"
      scrollButtons
      aria-label="visible arrows tabs example"
      sx={{
        [`& .${tabsClasses.scrollButtons}`]: {
          "&.Mui-disabled": { opacity: 0.3 },
        },
        flexGrow: 1,
        maxWidth: "100%",
        backgroundColor: (theme) => theme.palette.common,
        position: "sticky",
        top: (theme) => theme.header.heightHeader,
        mt: "20px",
        pb: "20px",
        zIndex: 99,
        color: "#fff",
        "& .MuiButtonBase-root": {
          color: (theme) => theme.palette.common,
          fontSize: "var(--fz-text-tab)",
          textTransform: "capitalize",
        },
      }}
    >
      {/* <Tab label="All" value={0}></Tab> */}
      {filterGenres?.map((genres, index) => {
        return <Tab key={index} label={genres.name} value={genres.id} />;
      })}
    </Tabs>
  );
};

export default TabsItem;
