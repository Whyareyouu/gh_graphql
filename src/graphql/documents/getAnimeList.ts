import { gql } from "@apollo/client";

export const GET_ANIME_LIST = gql`
  query GetAnimeList {
    Page {
      media {
        seasonYear
        format
        coverImage {
          large
        }
        title {
          english
        }
      }
    }
  }
`;
