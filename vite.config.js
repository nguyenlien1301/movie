import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPath from "vite-jsconfig-paths";
import svgr from "vite-plugin-svgr";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), jsconfigPath],
  resolve: {
    alias: {
      find: "~",
      replacement: "/src",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0", // Mở cổng để các thiết bị khác trong cùng mạng có thể truy cập
    port: 5173, // Đảm bảo trùng với cổng bạn đang chạy (có thể thay đổi nếu cần)
  },
});
