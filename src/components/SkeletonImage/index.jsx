import { Skeleton } from "antd";
import React from "react";
import { styled } from "styled-components";

export const SkeletonImageStyle = styled.div`
  .ant-skeleton {
    width: 100%;
  }
`;

const SkeletonImage = (props) => {
  return (
    <SkeletonImageStyle {...props}>
      <Skeleton.Image active style={{ width: "100%", height: 250 }} />
    </SkeletonImageStyle>
  );
};

export default SkeletonImage;
