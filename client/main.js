import React, { Component } from 'react'
import { render } from 'react-dom'

class Typeahead extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleCountryList = this.handleCountryList.bind(this)
    this.state = {
      value: '',
      countries: [],
      matches: []
    }
  }

  componentWillMount() {
    const country = () => {
      return fetch('http://localhost:7000/country').then(res => res.json())
    }
    country().then(countries => this.setState({ countries: countries }))
  }

  handleOnChange(event) {
    console.log(event.target.value)
    this.setState({ value: event.target.value })
    this.setState({
      matches: this.state.countries.filter(
        ({ name }) =>
          !(this.state.value === '') && name.startsWith(this.state.value)
      )
    })
  }

  handleCountryList() {}

  render() {
    console.log(this.state.matches)
    return (
      <div>
        <input onChange={this.handleOnChange} />
        {this.state.matches.length > 0 && (
          <div>
            <ul>
              {this.state.matches.map(({ name: match }) => (
                <li key={match}>{match}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

render(<Typeahead />, document.querySelector('.container'))
