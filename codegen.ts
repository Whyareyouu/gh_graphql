import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "https://api.github.com/graphql": {
        headers: {
          "User-Agent": "Whyareyouu",
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN ?? ""}`,
        },
      },
    },
  ],
  documents: ["src/graphql/documents/**/*.{ts,tsx}"],
  generates: {
    "./src/graphql/requests/__generated__.ts": {
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
