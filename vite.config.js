import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, "index.html"),
  //       markdown: resolve(
  //         __dirname,
  //         "src/pages/markdown-editor/markdown-editor-ui.html"
  //       ),
  //       reactHome: resolve(__dirname, "src/pages/react-home/react-home.html"),
  //     },
  //   },
  // },
});
