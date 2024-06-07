// Why would we be using Fetch instead of using Axios?
//

import { useEffect, useState } from "react"

// notice that this will be exactly the same as Axios except we're not using an outside part like Axios
interface User {
    id: number
    name: string
}


const FetchingWFetch = () => {

    //useState to help us with our users state

    const [users, setUsers] = useState<User[]>([])

    // Create a function to help us fetch our data
    const fetchUserData = () => {
        // we will need to get this promise and do a .then and then turn it into json format
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    }

    // We need a useEffect for rendering our data once our fetching Fetch component loads, no dependencay on axios, 
    useEffect(() => {
      
        fetchUserData()
      
    }, [])
    

  return (
    <>
        <h1 className="text-center mt-5">Fetching Data Using Fetch</h1>
        <div>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    </>
  )
}

export default FetchingWFetch