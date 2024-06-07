// Now learning how to use useEffect and fetching data in React

import { useState } from "react"
import ProductList from "./components/ProductList"
import UseEffectExample from "./components/UseEffectExample"
import UseEffectExample2 from "./components/UseEffectExample2"
import FetchingAxios from "./components/FetchingAxios"
import FetchingWFetch from "./components/FetchingWFetch"
import AsyncAwait from "./components/AsyncAwait"
import LoadingIndicator from "./components/LoadingIndicator"
import DeleteData from "./components/DeleteData"





const App = () => {

  const [category, setCategory] = useState('')

  return (
    <>
        <h1 className="text-center">React Fetching Data Examples, using</h1>
        <h1 className="text-center">Axios, services, Http & CRUD</h1>

        {/* <UseEffectExample/> */}
        {/* <UseEffectExample2/> */}
        {/* <ProductList category={category}/> */}
        {/* <div> */}
          {/* notice when using an onChange we need to use event to grab the value */}
          {/* <select className="form-select" onChange={(e)=> setCategory(e.target.value)}>
            <option value=""></option>
            <option value="Clothing">Clothing</option>
            <option value="Household">Household</option>
          </select> */}
        {/* </div> */}

        {/* <FetchingAxios/> */}
        {/* <FetchingWFetch/> */}
        {/* <AsyncAwait/> */}
        {/* <LoadingIndicator/> */}
        <DeleteData/>
    </>
  )
}

export default App