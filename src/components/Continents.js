import React  from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_CONTINENTS } from '../queries';
import Display from './Display';

const Continents  = ({ onSelectContinent }) => (
    <Query query={GET_ALL_CONTINENTS}>
         {({loading, error, data}) => {
           if (loading) return <p>Loading...</p>;
            if (error) return <p>{error.message}</p>;
          return (
              <div>
                <h2>Choose continent</h2>
                <h3>Use serach to filter through the results</h3>
                <Display data={data.continents} onSelect={onSelectContinent}/>
              </div>
            );
          }}
       </Query>
 )

export default Continents; 