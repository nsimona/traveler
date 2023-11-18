import gql from "graphql-tag";

const GET_LOCAL_COUNTRY = gql`
  {
    country @client {
      code
    }
  }
`;

const GET_LOCAL_CONTINENT = gql`
  {
    continent @client {
      code
    }
  }
`;

const GET_ALL_CONTINENTS = gql`
  {
    continents {
      name
      code
    }
  }
`;

const GET_ALL_COUNTRIES = gql`
  query GET_ALL_COUNTRIES($code: ID!) {
    continent(code: $code) {
      name
      countries {
        name
        currency
        code
      }
    }
  }
`;

const GET_COUNTRY = gql`
  query GET_COUNTRY($code: ID!) {
    country(code: $code) {
      name
      code
      currency
      phone
      native
      languages {
        name
      }
    }
  }
`;

export {
  GET_LOCAL_COUNTRY,
  GET_LOCAL_CONTINENT,
  GET_ALL_CONTINENTS,
  GET_ALL_COUNTRIES,
  GET_COUNTRY,
};
