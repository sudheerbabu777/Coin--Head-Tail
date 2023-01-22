// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    total: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickToss = () => {
    const result = Math.floor(Math.random() * 2)
    if (result === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
    this.setState(prevState => ({
      total: prevState.total + 1,
    }))
  }

  render() {
    const {heads, tails, total, imageUrl} = this.state
    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="head-tail">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image-toss" />
          <div>
            <button className="button" type="button" onClick={this.onClickToss}>
              Toss Coin
            </button>
          </div>

          <div className="count-container">
            <p className="count">Total:{total}</p>
            <p className="count">Heads:{heads}</p>
            <p className="count">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
