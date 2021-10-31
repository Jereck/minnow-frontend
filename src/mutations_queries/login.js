import gql from 'graphql-tag';

export const loginMutation = gql`
mutation login($userName: String!, $password: String!) {
  login(userName: $userName, password: $password) {
    id
    firstName
    lastName
    email
    userName
    token
  }
}
`
export const registerUserMutation = gql`
mutation createUser($user: CreateUserInput!) {
  createUser(user: $user) {
    id
    firstName
    lastName
    email
    userName
    advisor
  }
}
`