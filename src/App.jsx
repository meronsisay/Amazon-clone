import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Routing from "./Routing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
