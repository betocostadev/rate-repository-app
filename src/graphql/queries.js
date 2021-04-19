import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query repositories(
    $first: Int,
    $after: String
    $orderBy: AllRepositoriesOrderBy,
    $orderDirection: OrderDirection,
    $searchKeyword: String
    ){
    repositories(
      first: $first,
      after: $after,
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword
      ) {
      totalCount
      edges {
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
          url
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      url
    }
  }
`;

export const GET_REVIEWS = gql`
  query repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      id
      fullName
      reviews (first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;
