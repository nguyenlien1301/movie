export const CARD_ITEM_TYPE = {
  movies: "movies",
  tv_series: "tv_series",
};

export const TYPE_PAGE = {
  home: "home",
  all: "all",
};

export const SORT_OPTIONS = {
  // mức độ phổ biến
  // default_value: {
  //   value: "default_value",
  //   label: "None",
  //   queryObject: { sort_by: undefined },
  // },
  popularity_asc: {
    value: "popularity_asc",
    label: "Popularity Ascending",
    queryObject: { sort_by: "popularity.asc" },
  },
  popularity_desc: {
    value: "popularity_desc",
    label: "Popularity Descending",
    queryObject: { sort_by: "popularity.desc" },
  },
  // đánh giá xếp hạng
  rating_asc: {
    value: "rating_asc",
    label: "Rating Ascending",
    queryObject: { sort_by: "revenue.asc" },
  },
  rating_desc: {
    value: "rating_desc",
    label: "Rating Descending",
    queryObject: { sort_by: "revenue.desc" },
  },
  // ngày phát hành chính
  releasedate_asc: {
    value: "releasedate_asc",
    label: "Release Date Ascending",
    queryObject: { sort_by: "primary_release_date.asc" },
  },
  releasedate_desc: {
    value: "releasedate_desc",
    label: "Release Date Descending",
    queryObject: { sort_by: "primary_release_date.desc" },
  },
  // theo tiêu đề
  title_asc: {
    value: "title_asc",
    label: "Title (A-Z)",
    queryObject: { sort_by: "title.asc" },
  },
  title_desc: {
    value: "title_desc",
    label: "Title (Z-A)",
    queryObject: { sort_by: "title.desc" },
  },
  vote_count_asc: {
    value: "vote_count_asc",
    label: "Vote count Ascending",
    queryObject: { sort_by: "vote_count.asc" },
  },
  vote_count_desc: {
    value: "vote_count_desc",
    label: "Vote count Descending",
    queryObject: { sort_by: "vote_count.desc" },
  },
};
