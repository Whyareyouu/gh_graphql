import { gql } from "@apollo/client";

export const GET_ANIME_LIST = gql`
  query GetAnimeList($page: Int, $perPage: Int) {
    Page(perPage: $perPage, page: $page) {
      media(sort: POPULARITY_DESC, type: ANIME, format: TV) {
        seasonYear
        format
        id
        coverImage {
          large
        }
        title {
          english
          romaji
        }
      }
      pageInfo {
        hasNextPage
        total
      }
    }
  }
`;
