// import nashwood from "./assets/nashwood-nw-icon-logo-black-rgb-640px-w-72ppi.png";
// import nashwood2 from "./assets/nashwood-nw-icon-logo-white-rgb-640px-w-72ppi.png";
// import PhotoAlbum from "react-photo-album";
import bar from "./assets/bar_and_stage.png";
import cocktail from "./assets/HB-Victoria-Not-So-Secret-Mocktail.jpg";
import salmon from "./assets/Humble-Baron-Wildcaughtsalmon.jpg";
import snowcrab from "./assets/HB_SauteSnowCrabClaw.jpg";
import images from "./images";
import nashwoodwordmark from "./assets/nashwood-nw-wordmark-logo-white-rgb-640px-w-72ppi.png";
import About from "./components/About";

import Navbar from "./components/Navbar";
import Hopitality from "./components/Hopitality";
import RealEstate from "./components/RealEstate";
import Entertainment from "./components/Entertainment";
import Art from "./components/Art";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
      <div className="grid md:grid-cols-4 gap-4 hover:grid-cols-4 home-photos">
        <img
          src={bar}
          width={500}
          height={500}
          className="object-contain bar-photo"
          alt="humble baron bar"
        />
        <img
          src={salmon}
          width={350}
          height={350}
          className="object-contain salmon-photo"
          alt="salmon"
        />
        <img
          src={snowcrab}
          width={500}
          height={500}
          className="object-contain snowcrab-photo"
          alt="snowcrab"
        />
      </div>

      <div>
        <About />
      </div>
      <VerticalTimeline className="vertical-timeline"></VerticalTimeline>

      <div>
        <Hopitality />
      </div>
      <VerticalTimeline className="vertical-timeline"></VerticalTimeline>

      <div>
        <RealEstate />
      </div>
      <VerticalTimeline className="vertical-timeline"></VerticalTimeline>

      <div>
        <Entertainment />
      </div>
      <VerticalTimeline className="vertical-timeline"></VerticalTimeline>

      <div>
        <Art />
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
