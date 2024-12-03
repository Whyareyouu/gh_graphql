import { gql } from "@apollo/client";

export const GET_ANIME_BY_ID = gql`
  query GetAnimeById($mediaId: Int) {
    Page {
      media(sort: POPULARITY_DESC, type: ANIME, format: TV, id: $mediaId) {
        seasonYear
        format
        id
        coverImage {
          large
        }
        title {
          english
          romaji
          native
        }
        status
        endDate {
          day
          month
          year
        }
        startDate {
          day
          month
          year
        }
        duration
        description
        episodes
        genres
        season
        studios {
          edges {
            isMain
            node {
              name
            }
          }
        }
      }
    }
  }
`;
