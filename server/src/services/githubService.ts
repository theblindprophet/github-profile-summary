import fetch from "cross-fetch";
import gql from "graphql-tag";
import { ApolloClient } from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { githubUserAccessToken } from "../../lib/config";

const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://api.github.com/graphql",
        fetch,
        headers: {
            authorization: `Bearer ${githubUserAccessToken}`
        }
    }),
    cache: new InMemoryCache()
});

export const getUserData = async (userName: string): Promise<any> => {
  return client.query({
    query: gql`{
            user(login: ${userName}) {
                id
                login
                name
                bio
                url
                websiteUrl
                email
                createdAt
                location
                avatarUrl
                isBountyHunter
                isHireable
                pullRequests() {
                    totalCount
                }
                issues() {
                    totalCount
                }
            }
        }`
  });
};
