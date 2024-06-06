import { useEffect, useRef } from "react";

const UseEffectExample2 = () => {
  // This use ref is to ...
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // ref
    if (ref.current) ref.current.focus();
    // document.title = "This is a ref"
  }, []);

  // use a useEffect to manipulate the DOM, subscribe or unsubscribe, or to fetch data
  useEffect(() => {
    // look at the title of the page in the tab
    document.title = 'This is Cool!'
  }, []);

  // lets use an effect to work with data see Product list

  return (
    <>
      <h1 className="text-center mt-5">UseEffect Example 2</h1>
      <div className="container d-flex justify-content-center">
        <div className="col-3 ">
          {/* This below would be able to directly modify the dom but we dont want to do that right now */}
          <input ref={ref} type="text" className="form-control" />
        </div>
      </div>
    </>
  );
};

export default UseEffectExample2;
