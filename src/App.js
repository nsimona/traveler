import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import * as background from './backgrounds'
import { ApolloProvider } from 'react-apollo';
import client from './apollo';
import Country from './components/Country';
import Continents from './components/Continents';
import Countries from './components/Countries';

class App extends Component {
  state ={
    continent: background.def
  }
  selectContinent = (code) =>{
      client.writeData({ data: {
        continent: {
          code: code, 
          __typename: 'ContinentCode' 
        },
        country: {
          code: '',
          __typename: 'CountryCode'
        }
      }
    })
    this.setState({
      continent: background[code.toLowerCase()]
    })
  }
  selectCountry = (code) =>{
    client.writeData({ data: {country: {code, __typename: 'CountryCode' }}})
  }
  render() {
   return (
     <div className="main" style={{ backgroundImage: `url(${this.state.continent})` }}>
      <div className="logo">
        <img src={logo} alt='Traveler App'/>
      </div>
        <div className="app">
          <ApolloProvider client={client}>
            <Continents onSelectContinent={this.selectContinent}/>
            <Countries selectCountry={this.selectCountry}/>
            <Country/>
          </ApolloProvider>
        </div>
    </div>
   ) 
  }
}
export default App;