import React from "react";
import dynamic from "next/dynamic";

const App = dynamic(() => import("./App"), { ssr: false });

const HomePage: React.FC = () => {
  return (
    <div>
      <App />
    </div>
  );
};

export default HomePage;
