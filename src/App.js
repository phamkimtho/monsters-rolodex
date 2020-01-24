import React, { Component } from 'react'
// import logo from "./logo.svg";
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(respone => respone.json())
      .then(users => {
        this.setState({ monsters: users })
      })
  }

  //hoặc sử dụng hàm này
  // handleChange = e => {
  //   this.setState({ searchField: e.target.value })
  // }

  render () {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <h1>Monsters Rododex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={e => this.setState({ searchField: e.target.value })}
          // handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
