import { gql } from "@apollo/client";

export const GET_CHARACTERS_BY_ID = gql`
  query GetCharactersById($role: CharacterRole, $mediaId: Int) {
    Media(id: $mediaId) {
      characters(role: $role) {
        nodes {
          id
          name {
            full
            native
          }
          image {
            large
            medium
          }
          age
          gender
        }
      }
    }
  }
`;
