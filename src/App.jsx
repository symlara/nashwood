// import nashwood from "./assets/nashwood-nw-icon-logo-black-rgb-640px-w-72ppi.png";
// import nashwood2 from "./assets/nashwood-nw-icon-logo-white-rgb-640px-w-72ppi.png";
// import PhotoAlbum from "react-photo-album";
// import images from "./images";
import bar from "./assets/bar_and_stage.png";
import nashwoodwordmark from "./assets/nashwood-nw-wordmark-logo-white-rgb-640px-w-72ppi.png";
import About from "./components/About";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <img
          src={nashwoodwordmark}
          alt="nashwood-workmark"
          className="nashwood"
        />
      </div>
      <Navbar />
      {/* <div>
        <img src={bar} width={1000} height={900} className="absolute" />
      </div> */}
      <div>
        <About />
      </div>

      <div className="flex justify-center items-center">
        {/* <img
          src={nashwood2}
          alt="nashwood-logo"
          width={100}
          height={100}
          className="md:mr-[1700px]"
        /> */}
      </div>
    </>
  );
}

export default App;
