import { gql } from "@apollo/client";

export const GET_SCORE_DISTRIBUTION_BY_ID = gql`
  query GetScoreDistributionById($mediaId: Int) {
    Media(id: $mediaId) {
      stats {
        scoreDistribution {
          amount
          score
        }
      }
    }
  }
`;
