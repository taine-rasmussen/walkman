import useAuth from './useAuth'

const Dashboard = (props) => {
  const {
    code
  } = props

  const accessToken = useAuth(code)


  return (
    <div>
      dashboard
    </div>
  )
}

export default Dashboard
