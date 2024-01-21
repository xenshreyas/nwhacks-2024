import React from "react";
import dynamic from "next/dynamic";

const App = dynamic(() => import("./App"), { ssr: false });

const HomePage: React.FC = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/background.png')" }}>
      <App />
    </div>
  );
};

export default HomePage;
