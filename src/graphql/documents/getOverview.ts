import { gql } from "@apollo/client";

export const GET_OVERVIEW = gql`
  query GetOverview($mediaId: Int) {
    Media(id: $mediaId) {
      stats {
        scoreDistribution {
          amount
          score
        }
        statusDistribution {
          status
          amount
        }
      }
    }
  }
`;
