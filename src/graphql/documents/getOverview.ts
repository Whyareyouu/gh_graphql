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

      characters(sort: [ROLE, RELEVANCE], perPage: 4) {
        edges {
          role
          node {
            id
            name {
              full
            }
            image {
              medium
            }
            gender
            age
          }
        }
      }

      reviews(sort: RATING_DESC, perPage: 4) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
        }
        nodes {
          id
          summary
          rating
          ratingAmount
          score
          createdAt
          user {
            id
            name
            avatar {
              medium
            }
          }
        }
      }

      recommendations(sort: RATING_DESC, perPage: 6) {
        nodes {
          mediaRecommendation {
            id
            title {
              romaji
              english
              native
            }
            coverImage {
              large
            }
            format
            status
            episodes
            averageScore
            type
          }
        }
      }
    }
  }
`;
