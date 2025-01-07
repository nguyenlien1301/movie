import moment from "moment";
import { FORMAT_DATE } from "../constants/format";

export const formatDate = (date, type = FORMAT_DATE) => {
  if (!date) return null;
  return moment(date).format(type);
};

export const transFormNumberPecent = (number) => {
  if (!number) return 0;
  return number * 100;
};

export const removeVietnameseTones = (str) => {
  if (!str || typeof str !== "string") {
    return ""; // Trả về chuỗi rỗng nếu đầu vào không hợp lệ
  }
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
};
