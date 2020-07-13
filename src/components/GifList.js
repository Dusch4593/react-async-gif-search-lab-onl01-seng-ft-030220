import React, { PureComponent } from 'react'

export default class GifList extends PureComponent {
  render() {
    return (
      <div>
          {this.props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
      </div>
    )
  }
}
