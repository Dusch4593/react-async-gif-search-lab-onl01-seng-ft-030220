import React, { PureComponent } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends PureComponent {
  state = {
    gifs: []
  }

  getGIFs = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=SAdqcTCFm8Pz8lc3OWcbaCpKscD8ETfe&rating=g`)
      .then(res => res.json())
      .then(results => {
        this.setState({gifs: results.data.slice(0,3).map(gif => {
          return gif.images.original
        })}, () => {console.log(this.state.gifs)})
      })
  }



  render() {
    return (
      <div>
        < GifSearch getGIFs={this.getGIFs}/>
        < GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
