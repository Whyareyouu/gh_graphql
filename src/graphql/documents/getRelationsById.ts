import { gql } from "@apollo/client";

export const GET_RALATIONS_BY_ID = gql`
  query GetRelationsById($mediaId: Int, $isMain: Boolean) {
    Media(id: $mediaId) {
      relations {
        nodes {
          coverImage {
            large
          }
          title {
            english
            romaji
          }
          type
          seasonYear
          season
          episodes
          averageScore
          format
          studios(isMain: $isMain) {
            nodes {
              name
            }
          }
          startDate {
            year
          }
          id
          genres
        }
      }
    }
  }
`;
