import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLoggin: false}

  onClickButton = () => {
    this.setState(prevState => ({isLoggin: !prevState.isLoggin}))
  }

  render() {
    const {isLoggin} = this.state
    return (
      <div className="page-container">
        <div className="card-container">
          <Message loggined={isLoggin} />

          {isLoggin ? (
            <Login logged={this.onClickButton} />
          ) : (
            <Logout loggedout={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
