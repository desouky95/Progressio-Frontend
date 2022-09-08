import { defineConfig } from "rollup";
import path from "path";
import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";
// import html from 'rollup-plugin-bundle-html';
import html from "@rollup/plugin-html";

export default defineConfig({
  context: path.resolve(__dirname, "./src"),
  input: "./src/index.ts",
  output: {
    dir: path.resolve(__dirname, "dist"),
  },
  plugins: [
    typescript(),
    serve({ port: 4000, open: true, contentBase: "public" }),
    html({
      publicPath: "./public",
      template: ({}) => "./public/index.html",
    }),
  ],
});
