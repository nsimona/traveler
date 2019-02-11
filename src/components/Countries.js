import React  from 'react';
import { Query } from 'react-apollo';
import { GET_LOCAL_CONTINENT, GET_ALL_COUNTRIES } from '../queries';
import Display from './Display';

const Countries  = ({ selectCountry }) => (
    <Query query={GET_LOCAL_CONTINENT}>
      {({data}) => {
          return (
            data.continent.code && 
            <Query query={GET_ALL_COUNTRIES} variables={{ code: data.continent.code }}>
              {({loading, error, data}) => {
                if (loading) return <p>Loading...</p>;
                  if (error) return <p>{error.message}</p>;
                return (
                    <div>
                      <h2>Choose country</h2>
                      <h3>If you are stuck, use the search bar..</h3>
                      <Display data={data.continent.countries} onSelect={selectCountry}/>
                    </div>
                  );
                }}
            </Query>
          )
      }}
       </Query>
  )

export default Countries; 