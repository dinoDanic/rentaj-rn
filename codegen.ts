import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  // schema: "http://localhost:4000/api/graphiql",
  schema: "https://rentaj-be-dev.dinosur.app/api/graphiql",
  documents: "gql/**/*.graphql",
  generates: {
    "gql/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
