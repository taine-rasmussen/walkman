import useAuth from './useAuth';

const Dashboard = ({ code }) => {

  const accessToken = useAuth(code)

  console.log(code)

  return (
    <div>
      {code}
    </div>
  )
}

export default Dashboard
