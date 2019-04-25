import React from 'react';
import Title from './components/Title';
import { SearchForm } from './components/SearchForm';

import './App.css';
import 'bulma/css/bulma.css';

class App extends React.Component {
  render() {  
    return (
      <div className="App">
        <Title >
          Search Movies Title
        </Title>
        <div className="SearchForm-wrapper">
          <SearchForm />
        </div>
      </div>
    );
}
}

export default App;
