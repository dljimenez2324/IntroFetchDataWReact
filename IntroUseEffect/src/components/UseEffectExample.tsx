import { useEffect, useState } from "react";

const UseEffectExample = () => {
    const [count, setCount] = useState(0);

    //useEffect is a React Hook and is used to manage side effects in functional components
    //we use them for things like fetching data (mostly), manually manipulate the DOM (update DOM), setting timers
    // side effects are ...

    // this uses a callback function which takes in two arguments
    // {} code goes in here
    // [] this is your dependency array

    // useEffect(()=>{},[]);

    // useEffect(() => {

    //     // this is the effect function (where the code lives).  Code will run after every render


    //     // Optional clean up function.  Code here runs before the component is unmounted or before the effect runs again.
    //     // return () => {
    //     //     console.log('clean up function')
    //     // }

    // }, [ /* dependency array */ ])
    // // whatever's inside our [] is our dependency.  It will make our useEffect fire every time this changes
    // // if you provide an empty array  []   , then the effect will only run once after the initial render

    // you can have MULTIPLE useEffects

    // now lets use our useEffect
    useEffect(() => {
        console.log('This count is');
    },[])


    // how to use useEffect with no clean up function
    useEffect(() => {
      
        console.log('This will re-run every time our dependency has changed The count is ', count);
      
    }, [count])
    
    // how to use the clean up function
    useEffect(() => {
      console.log('Subscribe')
    
      return () => {
        console.log('Unsubscribe from clean up function', count)
      }
    }, [count])
    

  // lets use a function to handle increments
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  // function to handle decrement
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h1 className="text-center my-5">UseEffect Example 1</h1>

      <div className="row justify-content-center">
        <div className="col-6 d-flex flex-column align-items-center">
          <p>{count}</p>
          <div>
            <button
              className="btn btn-primary mx-3 m-2"
              onClick={handleIncrement}
            >
              Increment
            </button>
            <button
              className="btn btn-secondary mx-3 m-2"
              onClick={handleDecrement}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseEffectExample;
