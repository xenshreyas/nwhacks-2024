import React from "react";
import dynamic from "next/dynamic";

import background from "/public/images/background.png";

const App = dynamic(() => import("./App"), { ssr: false })

const Home: React.FC = () => {

  console.log(background);

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/background.png')" }}>
      <App />
      
    </div>
  );
};

export default Home;
