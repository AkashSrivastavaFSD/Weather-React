import React from "react";
import "remixicon/fonts/remixicon.css"; // import icons from remixicon library
import Weather from "./components/weather";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Weather />

      <Footer />
    </div>
  );
};

export default App;
