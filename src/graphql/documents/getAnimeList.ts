import { gql } from "@apollo/client";

export const GET_ANIME_LIST = gql`
  query GetAnimeList($page: Int, $perPage: Int, $studiosIsMain2: Boolean, $sort: [MediaSort], $search: String,$type: MediaType) {
    Page(perPage: $perPage, page: $page) {
      media(sort: $sort, search: $search, type: $type) {
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
        averageScore
        genres
        season
        episodes
        studios(isMain: $studiosIsMain2) {
          nodes {
            name
          }
        }
        type
      }
      pageInfo {
        hasNextPage
        total
      }
    }
  }
`;
