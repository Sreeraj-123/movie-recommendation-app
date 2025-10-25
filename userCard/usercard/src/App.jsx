import '../src/css/App.css'
import AddUser from './components/addUser.jsx';
import UserCard from './components/userCard.jsx'

function App() {
  const users=[
    {
      Name: "Sreeraj V R",
      email:"abc@gmail.com"
    },
    {
      Name: "Sreevinya V R",
      email:"cde@gmail.com"
    },
    {
      Name: "Vineeth N",
      email:"fgh@gmail.com"
    }
  ];

  return (
    <div className='user-list'>
      <h1>User List</h1>
      <AddUser/>
      {users.map((user,index)=>(

        <UserCard 
          Key={index} 
          Name={user.Name} 
          email={user.email}
          />
      ))}
    </div>
  )
}

export default App
