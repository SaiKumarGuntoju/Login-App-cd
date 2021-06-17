import './index.css'

const Message = props => {
  const {loggined} = props

  if (loggined) {
    return <h1 className="message">Welcome User</h1>
  }
  return <h1 className="message">Please Login</h1>
}

export default Message
