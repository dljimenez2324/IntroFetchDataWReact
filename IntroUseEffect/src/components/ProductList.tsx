import { useEffect, useState } from "react";

// lets get some props that is helping us pass through the data from our useStates from the App.tsx
// interface CategoryProps {
//     category: string
// }

//  if we're going to use only one or two props we can do it this way below


// const ProductList = ({category}:CategoryProps) => {
const ProductList = ({category}:{category:string}) => {

    // lets simulate getting products
    const [product, setProduct] = useState<string[]>([]);

    // UseEffect to help us fetch our data from our backend
    useEffect(() => {
    
        console.log("Fetching product in ", category);
        setProduct(['Clothing', 'Household'])

      
    }, [category])
    

  return (
    <>
        <h1 className="text-center mt-5">Product List</h1>
        {/* now we can render our products */}
        {/* normally we would map it to display the items */}
        <p>{product}</p>
    </>
  )
}

export default ProductList