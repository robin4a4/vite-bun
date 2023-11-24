import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const clientComponentMap = {};
function rsc() {
  return {
    name: "transform-file",

    transform(code, id) {
      if (!id.includes("node_modules")) {
        const firstLine = code.split("\n")[0];
        const hasClientDirective = firstLine.includes("use client");

        const distId = `/dist/client/${path}.js`;

        if (hasClientDirective) {
          clientComponentMap[distId] = {
            id,
            chunks: [],
            name: "default", // TODO support named exports
            async: true,
          };
        }

        // You can log or perform additional actions based on your requirements

        // If you want to modify the code, you can return a new code
        // For example: return `// modified code: ${code}`;
      }

      return null; // Returning null means no code transformation
    },
    generateBundle() {
      console.log("here ?");
      console.log(clientComponentMap);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), rsc()],
});
