import { useEffect, useState } from "react";

interface User {
    id: number
    name: string
}


const AsyncAwait = () => {

    const [users, setUsers] = useState<User[]>([]);

    const [error, setError] = useState('');

    //function to handle our fetching data
    const fetchData = async () => {

        // our try block will try to get our data
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/xusers')

            // to handle an error
            if(!response.ok){
                throw new Error (`Http error! Status: ${response.status}`);
            }

            // if the above if fails then we do another thing that is when it doesnt go
            const data = await response.json();
            setUsers(data);
        }

        // will catch any errors and handle them
        
        // in order to see the error and understand what its doing or to get rid of erros
        catch (error: any) {
            console.log(error.message)
            setError(error.message)
        }
        

    }

    // we still need a useEffect for our function
    useEffect(() => {
      
        // we will call our fetchData  but also can be for manipulate the dom but for now we're just using it to fetch our data at the start of our load
        fetchData();
        
    }, [])
    

  return (
    <>
        <h1 className="text-center mt-5">Fetching Data with Async Await and handling errors</h1>
        <div>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
                {error && <p className="text-danger text-center mt-4">{error}</p>}
            </ul>
        </div>
    </>
  )
}

export default AsyncAwait