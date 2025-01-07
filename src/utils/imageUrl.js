import { BASE_IMAGE_URL, BASE_MEDIA_URL } from "../constants/environment";

const getImageUrl = (path) => {
  if (!path) return null;
  return `${BASE_IMAGE_URL}${path}`;
};
export default getImageUrl;

export const getMediaImageUrl = (path) => {
  if (!path) return null;
  return `${BASE_MEDIA_URL}${path}`;
};
