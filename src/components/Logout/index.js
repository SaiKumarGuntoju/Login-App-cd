// Write your code here
import './index.css'

const Logout = props => {
  const {loggedout} = props
  return (
    <button type="button" className="btn" onClick={loggedout}>
      Login
    </button>
  )
}
export default Logout
