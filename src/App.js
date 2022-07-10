import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard'
import './index.css'

const code = new URLSearchParams(window.location.search).get("code")

const App = () => {
  return code ? <Dashboard code={code} /> : <Login />
}

export default App
