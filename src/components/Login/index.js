import './index.css'

const Login = props => {
  const {logged} = props
  return (
    <button type="button" className="btn" onClick={logged}>
      Logout
    </button>
  )
}
export default Login
