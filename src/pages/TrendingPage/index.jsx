import React, { useEffect } from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid2";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCloseSelect,
  handleGetTrending,
  handleOpenSelect,
  setCurrentTab,
  updateTimeWindow,
} from "../../store/reducer/trendingReducer";
import CustomEmpty from "../../components/ComponentEmpty";
import CardPosterItem from "../../components/CardPosterItem";
import useDebounce from "../../hooks/useDebounce";
import TypographyTitle from "../../components/TypographyTitle";
import ArrayFromComponent from "../../components/ArrayFromComponent";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import PATHS from "../../constants/path";
import ContainerComponent from "@/components/ContainerComponent";

const tabItem = [
  { id: 1, label: "All", value: "all" },
  { id: 2, label: "Movie", value: "movie" },
  { id: 3, label: "TV", value: "tv" },
];

const TrendingPage = () => {
  const {
    selected,
    currentTab,
    loading: trendingLoading,
    timeWindow,
    trendingMovie,
  } = useSelector((state) => state.trending);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      handleGetTrending({
        tag: currentTab,
        timeWindown: timeWindow[currentTab],
      })
    );
  }, [currentTab, timeWindow[currentTab]]);

  const handleChangeTab = (event, newValue) => {
    dispatch(setCurrentTab(newValue));
  };
  const handleChangeSelect = (event) => {
    dispatch(updateTimeWindow({ tab: currentTab, value: event.target.value }));
  };
  const handleClose = () => {
    dispatch(handleCloseSelect());
  };
  const handleOpen = () => {
    dispatch(handleOpenSelect());
  };
  const loading = useDebounce(trendingLoading, 300);
  return (
    <ContainerComponent
      sx={{
        pt: "var(--h-header)",
      }}
    >
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>Trending</Breadcrumb.Item>
      </Breadcrumb>
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          [theme.breakpoints.down("tabletXs")]: {
            flexDirection: "column",
            gap: "20px",
            "& .MuiBox-root": {
              width: "100%",
              gap: "24px",
            },
          },
        })}
      >
        <TypographyTitle>
          {currentTab === "all" && "Xu hướng phim & truyền hình"}
          {currentTab === "movie" && "Xu hướng phim"}
          {currentTab === "tv" && "Xu hướng phim truyền hình"}
        </TypographyTitle>
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            gap: { tabletXs: 1, tabletSm: 4 },
            [theme.breakpoints.down("mobileMd")]: {
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0 !important",
            },
          })}
        >
          <Tabs
            value={currentTab}
            onChange={handleChangeTab}
            textColor=""
            indicatorColor="none"
            aria-label="secondary tabs example"
            sx={{
              alignItems: "center",
              "& .MuiTabs-flexContainer": {
                gap: "var(--gap-tab)",
              },
            }}
          >
            {tabItem.map(({ id, value, label }, index) => {
              return (
                <Tab
                  key={id || index}
                  value={value}
                  label={label}
                  sx={{
                    color: (theme) =>
                      currentTab === value
                        ? "var(--white)"
                        : theme.palette.common.color,
                    border: (theme) =>
                      currentTab === value
                        ? "transparent"
                        : `1px solid ${theme.borderColorCustom.border}`,
                    borderRadius: "50px",
                    minHeight: "30px",
                    p: "0 10px",
                    minWidth: { tabletXs: "60px", tabletSm: "70px" },
                    backgroundColor:
                      currentTab === value
                        ? "var(--blue-light)"
                        : "transparent",
                    ":hover": {
                      backgroundColor: "var(--blue-light)",
                      border: "var(--border) transparent",
                    },
                    fontSize: "var(--fz-text-tab)",
                    textTransform: "capitalize",
                    transition: "all 0.2s",
                  }}
                />
              );
            })}
          </Tabs>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={selected}
              onClose={handleClose}
              MenuProps={{
                disableScrollLock: true, // Vô hiệu hóa khóa cuộn
              }}
              onOpen={handleOpen}
              value={timeWindow[currentTab]}
              onChange={handleChangeSelect}
              sx={{
                "& .MuiSelect-select": {
                  display: "flex",
                  alignItems: "center",
                  py: "4px",
                },
              }}
            >
              <MenuItem value="day">Xu hướng hôm nay</MenuItem>
              <MenuItem value="week">Xu hướng tuần này</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {loading ? (
          <ArrayFromComponent />
        ) : trendingMovie.length > 0 ? (
          trendingMovie.map((movie, index) => (
            <CardPosterItem
              key={index}
              {...movie}
              size={{
                mobileXs: 6,
                mobileSm: 4,
                mobileXl: 3,
                mobileLg: 4,
                tabletSm: 2.4,
                desktopXs: 2,
              }}
            />
          ))
        ) : (
          <CustomEmpty description="Không tìm thấy hình ảnh nào" />
        )}
      </Grid>
    </ContainerComponent>
  );
};

export default TrendingPage;
