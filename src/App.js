import React, { Component } from 'react';
import { CardList } from './component/cardList/card-list.component';
import { SearchBox } from './component/searchBox/searchBox.component';

import './App.css';

class App extends Component {
  constructor() {
    super();


    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  handlechange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ monsters: user }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className='App'>
        <h1>Monster </h1>
        <SearchBox placeholder="Search Monster" handlechange={this.handlechange} />
        <CardList monster={filterMonster} />
      </div>
    )
  }

}

export default App;
