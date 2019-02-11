import ApolloClient, { InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache()

const defaults = {
    country: {
        code: '',
        name: '',
        __typename: 'CountryCode'
    },
    continent:{
        code: '',
        __typename: 'ContinentCode'
    }
}

const resolvers = {
    Mutation: { 
        selectContinent: (_, {code}, {cache}) => {
            const newContinent = {
                code, 
                __typename: 'ContinentCode',
            };

            cache.write({
                data: {
                    continent: newContinent
                }
            });

            return newContinent;
        }
    }
}


const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    clientState: {
        cache,
        defaults,
        resolvers,
    }
})

export default client;