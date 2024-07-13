import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Replace 'YOUR_GRAPHQL_SERVER_URL' with the actual URL of your GraphQL server
const GRAPHQL_SERVER_URL = "https://swapi-graphql.netlify.app/.netlify/functions/index";

// Create an HTTP link to your GraphQL server
const httpLink = createHttpLink({
    uri: GRAPHQL_SERVER_URL,
});

// Set up the authentication headers (if needed)
const authLink = setContext((_: any, { headers }: any) => {
    // You can add authentication tokens or other headers here
    // For example, if you are using JWT tokens:
    // const token = localStorage.getItem('token');
    // return {
    //   headers: {
    //     ...headers,
    //     Authorization: token ? Bearer ${token} : '',
    //   },
    // };
    return { headers: { ...headers } };
});

// Create the Apollo Client instance
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});


export default client;
