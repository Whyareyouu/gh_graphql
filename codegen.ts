import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://graphql.anilist.co",
  documents: ["./src/graphql/documents/**/*.ts"],
  generates: {
    "./src/graphql/hooks/__generated__.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "./src/graphql/requests/__generated__.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
