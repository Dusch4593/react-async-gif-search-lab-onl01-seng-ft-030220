import React, { PureComponent } from 'react'

export default class GifSearch extends PureComponent {
  state = {
    query: ''
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getGIFs(this.state.query)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id="query" type="text" onChange={this.handleChange} value={this.state.query} />
        </form>
      </div>
    )
  }
}
