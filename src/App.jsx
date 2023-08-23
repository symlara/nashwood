import { useState } from "react";
import nashwood from "./assets/nashwood-nw-icon-logo-black-rgb-640px-w-72ppi.png";
import nashwood2 from "./assets/nashwood-nw-icon-logo-white-rgb-640px-w-72ppi.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center">
        <img src={nashwood2} alt="nashwood-logo" width={150} height={100} />
      </div>
    </>
  );
}

export default App;
