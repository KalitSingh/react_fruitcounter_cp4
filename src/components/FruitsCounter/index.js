import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  mangoAte = () => {
    this.setState(prevState => {
      return {mangoCount: prevState.mangoCount + 1}
    })
  }

  bananaAte = () => {
    this.setState(prevState => {
      return {bananaCount: prevState.bananaCount + 1}
    })
  }

  resetBtn = () => {
    const {mangoCount, bananaCount} = this.state
    this.setState(() => {
      return {mangoCount: 0, bananaCount: 0}
    })
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    const {details} = this.props
    const {bananImg, mangoImg, bananaBtn, mangoBtn} = details
    console.log(bananImg)
    return (
      <div className="fruitsCounter-container">
        <div className="sub-container">
          <h1 className="main-heading">
            Ashus ate <span className="count-style">{mangoCount}</span> Mangoes{' '}
            <span className="count-style">{bananaCount}</span> Bananas
          </h1>
          <div className="card-container">
            <div className="details-container">
              <img className="fruitImg" src={mangoImg} alt="mango" />
              <div className="btn-container">
                <button
                  className="fruit-btn"
                  onClick={this.mangoAte}
                  type="button"
                >
                  {mangoBtn}
                </button>
              </div>
            </div>
            <div className="details-container">
              <img className="fruitImg" src={bananImg} alt="banana" />
              <div className="btn-container">
                <button
                  className="fruit-btn"
                  onClick={this.bananaAte}
                  type="button"
                >
                  {bananaBtn}
                </button>
              </div>
            </div>
            <div className="reset-btn-container">
              <button onClick={this.resetBtn} className="fruit-btn reset-btn">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
