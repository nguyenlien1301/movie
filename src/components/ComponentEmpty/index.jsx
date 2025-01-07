import styled from "@emotion/styled";
import { Empty } from "antd";

const CustomEmpty = styled(Empty)(({ theme }) => ({
  ".ant-empty-description": {
    color: theme.palette.text.primary, // Dùng màu chữ chính từ theme
  },
}));

export default CustomEmpty;
