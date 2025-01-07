import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: "/src",
      },
    ],
  },
  // server: {
  //   host: "0.0.0.0", // Mở cổng để các thiết bị khác trong cùng mạng có thể truy cập
  //   port: 5173, // Đảm bảo trùng với cổng bạn đang chạy (có thể thay đổi nếu cần)
  // },
});
