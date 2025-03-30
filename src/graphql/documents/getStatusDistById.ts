import { gql } from "@apollo/client";

export const GET_STATUS_DISTRIBUTION_BY_ID = gql`
  query GetStatusDistributionById($mediaId: Int) {
    Media(id: $mediaId) {
      stats {
        statusDistribution {
          status
          amount
        }
      }
    }
  }
`;
