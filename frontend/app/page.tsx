import React from "react";
import dynamic from "next/dynamic";

import background from "/Users/graceco/Documents/nwhacks-2024/frontend/assets/img/background.png";

const App = dynamic(() => import("./App"), { ssr: false });

const HomePage: React.FC = () => {

  console.log(background);

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/background.png')" }}>
      <App />
    </div>
    // <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${background})` }}>
    //   {/* Render the App component */}
    //   <App />
    // </div>
  );
};

export default HomePage;
