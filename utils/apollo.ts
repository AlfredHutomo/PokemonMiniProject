import { ApolloClient, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';

export const client = new ApolloClient({
    uri: 'https://beta.pokeapi.co/graphql/v1beta',
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    pokemons: offsetLimitPagination(),
                },
            },
        },
    }),
});
