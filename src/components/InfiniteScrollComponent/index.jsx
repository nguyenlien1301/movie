import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CustomSpin from "../CustomSpin";
import { Paper } from "@mui/material";

const InfiniteScrollComponent = ({ dataLength, next, hasMore, children }) => {
  return (
    <Paper
      id="scrollable-container"
      sx={{
        maxHeight: "500px", // Hoặc một giá trị chiều cao cố định
        overflowY: "auto",
        mt: "30px",
        backgroundColor: (theme) => theme.backgroundCustom.backgroundMuiPaper,
        boxShadow: 3,
      }}
    >
      <InfiniteScroll
        dataLength={dataLength}
        next={next}
        hasMore={hasMore}
        loader={<CustomSpin />}
        endMessage={<p>No more movies to load</p>}
        // scrollThreshold={0.9}
        scrollableTarget="scrollable-container"
      >
        {children}
      </InfiniteScroll>
    </Paper>
  );
};

export default InfiniteScrollComponent;
