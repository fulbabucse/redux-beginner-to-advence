import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import Home from "./components/Home";
// import { decrement, increment } from "./features/counter/counterSlice";
import router from "./routes/Router";

const App = () => {
  // const dispatch = useDispatch();
  // const { counter } = useSelector((state) => state.counter);

  return (
    // <div className="mt-10 ml-10 flex gap-20">
    //   <button
    //     onClick={() => dispatch(decrement())}
    //     className="btn btn-sm btn-primary rounded-md"
    //   >
    //     Decrement
    //   </button>
    //   <p>{counter}</p>
    //   <button
    //     onClick={() => dispatch(increment(5))}
    //     className="btn btn-sm btn-secondary rounded-md"
    //   >
    //     Increment
    //   </button>
    // </div>
    <RouterProvider router={router}>
      <div>
        <Home />
      </div>
    </RouterProvider>
  );
};

export default App;
