import axios from "axios"
import { useEffect, useState } from "react"

// to make it easier to get info from our objects from the axios link and only use the id and name we can restrict our users UseState to hold only show this data
interface User {
    id: number
    name: string
}

const FetchingAxios = () => {

    // we need a useState to hold the state of the users from our FetchData  and we're making sure that the type is restricted to our interface type and we're saying User[] because we have an array so that we can add to it
    const [users, setUsers] = useState<User[]>([])

    //Create a function using
    const FetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data))
    }

    
    // UseEffect to help with our FetchingData above
    
    useEffect(() => {
        
        FetchData();
    
    }, [])
    

  return (
    <>
        <h1 className="text-center">Fetching Data with Axios</h1>
        <ul>
            {users.map((user)=> <li key={user.id}>{user.name}</li>)}
        </ul>
    </>
  )
}

export default FetchingAxios