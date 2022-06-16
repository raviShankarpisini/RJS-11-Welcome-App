// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onClickButton = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      this.setState(prevState => ({isSubscribed: false}))
    } else {
      this.setState(prevState => ({isSubscribed: true}))
    }
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button className="button" type="button" onClick={this.onClickButton}>
            Subscribe
          </button>
        ) : (
          <button className="button" type="button" onClick={this.onClickButton}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
