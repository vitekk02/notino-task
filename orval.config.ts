import { defineConfig } from "orval";

export default defineConfig({
  fakeStoreAPI: {
    input: {
      target: "./openapi.json",
      filters: {
        tags: ["Products"],
      },
    },
    output: {
      mode: "split",
      target: "./src/api/generated",
      schemas: "./src/api/models",
      client: "react-query",
      prettier: true,
      override: {
        mutator: {
          path: "./src/api/axiosInstance.ts",
          name: "customInstance",
        },
        query: {
          useQuery: true,
          useInfinite: false,
          useInfiniteQueryParam: "page",
        },
      },
    },
  },
});
