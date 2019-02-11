import React  from 'react';
import { Query } from 'react-apollo';
import { GET_LOCAL_COUNTRY, GET_COUNTRY } from '../queries';

const Country = (code) => (
  <Query query={GET_LOCAL_COUNTRY}>
      {({data}) => {
          return (
            data.country.code && 
            <Query query={GET_COUNTRY} variables={{ code: data.country.code }}>
              {({loading, error, data}) => {
                if (loading) return <p>Loading...</p>;
                  if (error) return <p>{error.message}</p>;
                    return (
                      <div>
                        <h2>Tadaa!</h2>
                        <h3>Here is some useful info you may need ;)</h3>
                        <p> <strong>Code: </strong>{data.country.code}</p>
                        <p> <strong>Name: </strong>{data.country.name}</p> 
                        <p> <strong>Currency: </strong>{data.country.currency}</p>
                        <p> <strong>Native: </strong>{data.country.native}</p>
                        <p> <strong>Phone: </strong>{data.country.phone}</p>
                        <p> <strong>Languages: </strong>{data.country.languages.map(language => {
                              return language.name
                        }).join(", ")}
                      </p>
                    </div>
                  );
                }}
            </Query>
          )
      }}
    </Query>
)
export default Country; 


