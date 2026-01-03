// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],       // your library entry
  format: ["cjs", "esm"],        // CommonJS + ESM
  dts: true,                     // generate .d.ts files
  clean: true,                   // remove old dist before build
  sourcemap: true,               // optional, useful for debugging
  splitting: false,              // single-file outputs
  minify: false,                 // optional
});
